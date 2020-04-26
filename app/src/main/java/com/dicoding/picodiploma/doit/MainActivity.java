package com.dicoding.picodiploma.doit;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.content.Intent;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;

import com.dicoding.picodiploma.doit.list.Gridmode;
import com.dicoding.picodiploma.doit.list.ListSekolah;
import com.dicoding.picodiploma.doit.model.DataSekolah;
import com.dicoding.picodiploma.doit.model.Sekolah;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {
        private RecyclerView showSekolah;
        private String mode = "List Sekolah";
        private ArrayList<Sekolah> list = new ArrayList<>() ;
    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        setActionBarTitle(mode);

        showSekolah = findViewById(R.id.show_sekolah);
        showSekolah.setHasFixedSize(true);

        list.addAll(DataSekolah.getListnya());
        showlistsekolah();
    }
    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.main_menu, menu);
        return super.onCreateOptionsMenu(menu);
    }
    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        setMain(item.getItemId());
        return super.onOptionsItemSelected(item);
    }
    private void showlistsekolah(){
        showSekolah.setLayoutManager(new LinearLayoutManager(this));
        ListSekolah listSekolah = new ListSekolah(list, this);
        showSekolah.setAdapter(listSekolah);
    }
    private void setActionBarTitle(String mode) {
        if (getSupportActionBar() != null) {
            getSupportActionBar().setTitle(mode);
        }
    }
    public void showGrid(){
        showSekolah.setLayoutManager(new GridLayoutManager(this, 2));
        Gridmode gridmode = new Gridmode(list);
        showSekolah.setAdapter(gridmode);
    }
    public void setMain(int selectedMode){
        switch (selectedMode){
            case R.id.action_list:
                showlistsekolah();
                mode = "List Sekolah";
                break;
            case R.id.action_grid:
                showGrid();
                mode = "Grid all School";
                break;
            case R.id.action_about:
                mode = "About me";
                startActivity(new Intent(getApplicationContext(), AboutMe.class ));
                break;
        }
        setActionBarTitle(mode);
    }
}
