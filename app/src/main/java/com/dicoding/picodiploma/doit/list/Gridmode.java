package com.dicoding.picodiploma.doit.list;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;
import com.bumptech.glide.request.RequestOptions;
import com.dicoding.picodiploma.doit.R;
import com.dicoding.picodiploma.doit.model.Sekolah;

import java.util.ArrayList;

public class Gridmode extends RecyclerView.Adapter<Gridmode.GridViewHHolder> {
    private ArrayList<Sekolah> listSekolah;

    public Gridmode(ArrayList<Sekolah> list){
        this.listSekolah = list;
    }

    @NonNull
    @Override
    public GridViewHHolder onCreateViewHolder(@NonNull ViewGroup viewGroup, int viewType) {
        View view = LayoutInflater.from(viewGroup.getContext()).inflate(R.layout.item_denah, viewGroup,false);
        return new GridViewHHolder(view);

    }

    @Override
    public void onBindViewHolder(@NonNull GridViewHHolder holder, int position) {
        Glide.with(holder.itemView.getContext())
                .load(listSekolah.get(position).getPhoto())
                .apply(new RequestOptions().override(350, 550))
                .into(holder.imgPhoto);
    }

    @Override
    public int getItemCount() {
        return listSekolah.size();
    }

    public class GridViewHHolder extends RecyclerView.ViewHolder {
        ImageView imgPhoto;
        public GridViewHHolder( View itemView) {
            super(itemView);
                imgPhoto = itemView.findViewById(R.id.img_item_photo);
            }
    }
}
