/**
 * Galería full-bleed para /nosotros — guardada para uso futuro.
 * Para activar: importar en MainNosotros.jsx y añadir
 *   import '../css/saved/nosotros-gallery.css';
 */
import React from 'react';

const photoSlots = [
  { id: 1, label: 'Foto 1', hint: 'Equipo / oficina' },
  { id: 2, label: 'Foto 2', hint: 'Producción en set' },
  { id: 3, label: 'Foto 3', hint: 'Reunión con cliente' },
  { id: 4, label: 'Foto 4', hint: 'Momento de cultura' },
];

const NosotrosPhotoGallery = () => (
  <section className="nos-gallery border-t border-line">
    <div className="nos-gallery-header">
      <span className="eyebrow">El equipo</span>
      <h2 className="nos-gallery-title">Gente real, trabajo real</h2>
      <p className="nos-gallery-lead">Espacio reservado para cuatro fotos del equipo y la operación.</p>
    </div>
    <div className="nos-photos">
      {photoSlots.map((slot) => (
        <div key={slot.id} className="nos-photo" aria-label={slot.label}>
          <span className="nos-photo-label">{slot.label}</span>
          <span className="nos-photo-hint">{slot.hint}</span>
        </div>
      ))}
    </div>
  </section>
);

export default NosotrosPhotoGallery;
