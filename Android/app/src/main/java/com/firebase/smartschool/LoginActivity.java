package com.firebase.smartschool;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;

public class LoginActivity extends AppCompatActivity {
    private EditText inputUsername, inputPass;
    private Button btnLogin;
    private FirebaseAuth mAuth;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        mAuth = FirebaseAuth.getInstance();

        inputUsername = findViewById(R.id.inputUsername);
        inputPass = findViewById(R.id.inputPass);

        Button btnRegister = findViewById(R.id.btnRegister);
        btnRegister.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent goRegister = new Intent(LoginActivity.this, RegisterActivity.class);
                startActivity(goRegister);
                finish();
            }
        });

        Button btnLogin = findViewById(R.id.btnLogin);
        btnLogin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String username = inputUsername.getText().toString();
                String password = inputPass.getText().toString();

                if (username.equals("")){
                    Toast.makeText(LoginActivity.this, "Silahkan input Username",
                            Toast.LENGTH_SHORT).show();
                } else if (password.equals("")) {
                    Toast.makeText(LoginActivity.this, "Silahkan input Password",
                            Toast.LENGTH_SHORT).show();
                } else {
                    mAuth.signInWithEmailAndPassword(username, password)
                            .addOnCompleteListener(LoginActivity.this, new OnCompleteListener<AuthResult>() {
                                @Override
                                public void onComplete(@NonNull Task<AuthResult> task) {
                                    if (task.isSuccessful()) {
                                        // Sign in success, update UI with the signed-in user's information
                                        FirebaseUser user = mAuth.getCurrentUser();

                                        Toast.makeText(LoginActivity.this, "Authentication success.",
                                                Toast.LENGTH_SHORT).show();
                                    } else {
                                        // If sign in fails, display a message to the user.
                                        Toast.makeText(LoginActivity.this, "Authentication failed.",
                                                Toast.LENGTH_SHORT).show();
                                    }

                                    // ...
                                }
                            });
                }
            }
        });
    }

    @Override
    public void onStart() {
        super.onStart();
        // Check if user is signed in (non-null) and update UI accordingly.
        FirebaseUser currentUser = mAuth.getCurrentUser();
    }
}