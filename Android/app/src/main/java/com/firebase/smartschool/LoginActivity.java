package com.firebase.smartschool;

import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;



public class LoginActivity extends AppCompatActivity {

    // Firebase
    private FirebaseAuth database;
    private DatabaseReference users;


    private  EditText editUsername, editPassword;
    private Button btnLogin;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        // Firebase
        users = FirebaseDatabase.getInstance().getReference("users");
        database = FirebaseAuth.getInstance();


        editUsername = findViewById(R.id.editUsername);
        editPassword = findViewById(R.id.editPassword);

        btnLogin = findViewById(R.id.btnLogin);
        btnLogin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                login();
            }
        });

    }
    private void login() {
        Log.d("info","sing up");
        if (!validatForm()) {
            return;
        }
        String email = editUsername.getText().toString();
        String password = editPassword.getText().toString();


        database.signInWithEmailAndPassword(email, password)
                .addOnCompleteListener(this, new OnCompleteListener<AuthResult>() {
                    @Override
                    public void onComplete(@NonNull Task<AuthResult> task) {
                        Log.d("user", "signin : oncomplete:" + task.isSuccessful());

                        if (task.isSuccessful()){
                            sukses(task.getResult().getUser());
                        }
                        else {
                            Toast.makeText(LoginActivity.this, "failed to connect", Toast.LENGTH_SHORT).show();
                        }

                    }
                });


    }
    private void sukses(FirebaseUser user){
        String username = userFromEmail(user.getEmail());

        adminBaru(user.getUid(), username, user.getEmail());

        startActivity(new Intent(LoginActivity.this, MainActivity.class));
        finish();

    }

    private String userFromEmail(String email){
        if (email.contains("@")){
            return email.split("@")[0];
        }
        else{
            return email;
        }
    }
    private boolean validatForm(){
        boolean result = true;

        if (TextUtils.isEmpty(editPassword.getText().toString())){
            editPassword.setError("WAJIB");
            result = false;
        }
        else    {
            editPassword.setError(null);
        }
        if (TextUtils.isEmpty(editPassword.getText().toString())){
            editPassword.setError("Wajib Di isi");
            result = false ;
        }
        else{
            editPassword.setError(null);
        }
        return result;
    }

    private void adminBaru(String userid, String email, String password){
        Admin admin = new Admin(email, password);

        users.child("admins").child(userid).setValue(admin);
    }
}