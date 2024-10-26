// ContactButtons.js
'use client';
import React, { useState, useEffect } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import emailjs from '@emailjs/browser';

const ContactButtons = () => {
    console.log("EmailJS Public Key:", process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

    useEffect(() => emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY), []);

  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    recipient: '',
    senderName: '',
    senderEmail: '',
    message: ''
  });

  const handlePrint = () => {
    window.print();
  };

  const handleWhatsApp = () => {
    const text = "Hello! I'm reaching out to you via WhatsApp.";
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
      alert("Email sent successfully!");
    } catch (error) {
      console.error("Failed to send email", error);
      alert("Failed to send email. Please try again.");
    }
    handleCloseDialog();
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
        <DialogTitle>Send Email</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Recipient Email"
            type="email"
            fullWidth
            name="recipient"
            value={formData.recipient}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Your Name"
            type="text"
            fullWidth
            name="senderName"
            value={formData.senderName}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Your Email"
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
            multiline
            rows={4}
            fullWidth
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSendEmail} color="primary">Send</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ContactButtons;
