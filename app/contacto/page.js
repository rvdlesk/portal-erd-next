// app/contacto/page.js
"use client";

import { useRef, useState } from 'react';
import { Box, TextField, Button, Typography, Grid, Paper, Divider } from '@mui/material';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const formRef = useRef();
  const [captchaValid, setCaptchaValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaValid) {
      emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_USER_ID'
      )
      .then(
        (result) => {
          alert("Mensaje enviado con éxito");
        },
        (error) => {
          alert("Ocurrió un error al enviar el mensaje");
        }
      );
    } else {
      alert("Por favor, complete el CAPTCHA");
    }
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValid(!!value);
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 4 }}>
      <Grid container spacing={3}>
        {/* Mapa e Información a la izquierda */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ height: '100%', padding: 2 }}>
            <Typography variant="h5" gutterBottom>
              Información de Contacto
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Dirección:</strong> Calle Ejército Nacional, Santo Domingo, República Dominicana
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Teléfono:</strong> +1 (809) 123-4567
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Horario:</strong> Lunes a Viernes, 8:00 AM - 5:00 PM
            </Typography>
            <Divider sx={{ my: 2 }} />
            <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9543.15315632596!2d-70.0916598259962!3d18.569687654088067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaff36032e224bd%3A0x496cf488373d87eb!2sComandancia%20General%20ERD!5e0!3m2!1ses-419!2sdo!4v1730402639957!5m2!1ses-419!2sdo"
  width="100%"
  height="300"
  style={{ border: 0, borderRadius: '8px' }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

          </Paper>
        </Grid>

        {/* Formulario a la derecha */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 3 }}>
            <Typography variant="h5" gutterBottom>
              Contáctanos
            </Typography>
            <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
              <TextField label="Nombre" name="user_name" variant="outlined" fullWidth margin="normal" required />
              <TextField label="Correo Electrónico" name="user_email" type="email" variant="outlined" fullWidth margin="normal" required />
              <TextField label="Mensaje" name="message" multiline rows={4} variant="outlined" fullWidth margin="normal" required />

              {/* CAPTCHA */}
              <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
                <ReCAPTCHA sitekey="YOUR_SITE_KEY" onChange={handleCaptchaChange} />
              </Box>

              <Button type="submit" variant="contained" color="primary" disabled={!captchaValid}>
                Enviar
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactPage;
