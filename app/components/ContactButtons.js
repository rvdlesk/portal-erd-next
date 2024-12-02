// ContactButtons.js
'use client';
import React, { useState, useEffect } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import emailjs from '@emailjs/browser';
import { usePathname } from 'next/navigation';

const ContactButtons = () => {
    const pathname = usePathname();
 
    useEffect(() => emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY), []);

  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    recipient: '',
    senderName: '',
    senderEmail: '',
    message: ''
  });

  const url = `${process.env.NEXT_PUBLIC_BASE_URL}${pathname}`

  const handlePrint = () => {
    setTimeout(() => {
        window.print();
      }, 100);
  };

  const handleWhatsApp = () => {
    const text = url;
    window.open(`whatsapp://send?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSendEmail = async () => {
    formData.message = url
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          recipient: formData.recipient,
          senderName: formData.senderName,
          senderEmail: formData.senderEmail,
          message: formData.message
        },{
            publicKey:  '2vN1xaxI_wwSHYVE1',
          },
      );
      alert("Correo enviado!");
    } catch (error) {
      console.error("Failed to send email", error);
      alert("Error al enviar el correo. Por favor, inténtalo de nuevo.");
    }
    handleCloseDialog();
    setFormData({
        recipient: '',
        senderName: '',
        senderEmail: '',
    })
  };

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Button variant="contained" onClick={handlePrint} style={{ backgroundColor: '#333', color: '#fff' }}>
        <i className="ri-printer-line"></i>
      </Button>
      <Button variant="contained" onClick={handleWhatsApp} style={{ backgroundColor: '#25D366', color: '#fff' }}>
        <i className="ri-whatsapp-line"></i>
      </Button>
      <Button variant="contained" onClick={handleOpenDialog} style={{ backgroundColor: '#333', color: '#fff' }}>
        <i className="ri-mail-line"></i>
      </Button>

      {/* Dialog for Email Form */}
      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle>Compartir vía Correo</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Correo Destino"
            type="email"
            fullWidth
            name="recipient"
            value={formData.recipient}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Tu Nombre"
            type="text"
            fullWidth
            name="senderName"
            value={formData.senderName}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Tu Correo"
            type="email"
            fullWidth
            name="senderEmail"
            value={formData.senderEmail}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Message"
            type="text"
            disabled
            multiline
            rows={4}
            fullWidth
            name="message"
            value={`Esta información podría ser interesante para ti: ${url}`}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancelar</Button>
          <Button onClick={handleSendEmail} color="primary">Enviar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ContactButtons;
