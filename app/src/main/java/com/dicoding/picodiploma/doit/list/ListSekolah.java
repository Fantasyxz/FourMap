package com.dicoding.picodiploma.doit.list;

import android.app.Activity;
import android.content.Intent;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;
import com.bumptech.glide.request.RequestOptions;
import com.dicoding.picodiploma.doit.R;
import com.dicoding.picodiploma.doit.SekolahActivity;
import com.dicoding.picodiploma.doit.model.Sekolah;

import java.util.ArrayList;

public class ListSekolah extends RecyclerView.Adapter<ListSekolah.ListViewHolder> {
    private ArrayList<Sekolah> listSekolah;
    private Activity activity;

    public ListSekolah(ArrayList<Sekolah> list, Activity activity){
        this.listSekolah = list;
        this.activity=activity;
    }


    @NonNull
    @Override
    public ListViewHolder onCreateViewHolder(@NonNull ViewGroup viewGroup, int viewType) {
        View view = LayoutInflater.from(viewGroup.getContext()).inflate(R.layout.item_denah, viewGroup, false);


        return new ListViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull ListViewHolder holder, int position) {
        Sekolah sekolah = listSekolah.get(position);
        Glide.with(holder.itemView.getContext()).load(sekolah.getPhoto()).apply(new RequestOptions().override(55,55)).into(holder.imgPhoto);
        holder.name.setText(sekolah.getName());
        holder.detail.setText(sekolah.getDetail());
        holder.tvpos.setText(String.valueOf(position));
    }

    @Override
    public int getItemCount() {
        return listSekolah.size();
    }

    public class ListViewHolder extends RecyclerView.ViewHolder {
        ImageView imgPhoto;
        TextView name,detail;
        TextView tvpos;
        public ListViewHolder( View itemView) {
            super(itemView);
            imgPhoto = itemView.findViewById(R.id.img_item_photo);
            name = itemView.findViewById(R.id.tv_sekolah_name);
            detail = itemView.findViewById(R.id.tv_item_detail);
            tvpos = itemView.findViewById(R.id.tv_pos_sekolah);
            itemView.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    try {
                        String strpos = tvpos.getText().toString();
                        SekolahActivity.strpos = strpos;
                        activity.startActivity(new Intent(activity,SekolahActivity.class));
                    } catch (Exception e) {
                        Log.e("TAG", e.toString() );
                        e.printStackTrace();
                    }
//                startActivity(context,new Intent(context,SekolahActivity.class),null);
//                Toast.makeText(context,"Test",Toast.LENGTH_LONG).show();
                }
            });
        }
    }
}
