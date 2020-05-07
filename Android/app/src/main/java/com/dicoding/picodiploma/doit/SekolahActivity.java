package com.dicoding.picodiploma.doit;

import androidx.appcompat.app.AppCompatActivity;

import android.icu.text.Transliterator;
import android.os.Bundle;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import com.dicoding.picodiploma.doit.model.DataSekolah;
import com.dicoding.picodiploma.doit.model.Sekolah;

import java.util.ArrayList;

public class SekolahActivity extends AppCompatActivity {

    TextView tvNamaSekolah,tvdetail ;
    ImageView ivSekolah;
    public static String strpos;

    ArrayList<Sekolah> datasekolah;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sekolah);

        try {
//            Toast.makeText(getApplicationContext(),strpos, Toast.LENGTH_LONG).show();
            datasekolah = DataSekolah.getListnya();
            Sekolah s = datasekolah.get(Integer.valueOf(strpos));
            tvNamaSekolah= findViewById(R.id.tv_sekolah_name);
            tvNamaSekolah.setText(s.getName());

           tvdetail = findViewById(R.id.tv_item_detail);
           tvdetail.setText(s.getDetail());

           ivSekolah = findViewById(R.id.img_item_photo);
           ivSekolah.setImageDrawable(getDrawable(s.getPhoto()));
//
        } catch (NumberFormatException e) {
            e.printStackTrace();
        }
    }
}
