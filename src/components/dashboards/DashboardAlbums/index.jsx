import React, { useState } from 'react'
import styles from './style.module.css';
import { useStateValue } from '../../../context/StateProvider';
import AlbumCard from '../../AlbumCard';

export default function DashboardAlbums() {
  const [{ albums }] = useStateValue()
  const [selectedAlbum, setSelectedAlbum] = useState()


  return (
    <div className={styles.containerAlbums}>
      {albums && albums.map((album, i) => (
        <AlbumCard key={album._id} album={album} i={i} setSelectedAlbum={setSelectedAlbum} />
      ))}
    </div>
  )
}


