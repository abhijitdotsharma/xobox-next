import Head from 'next/head'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import UserForm from '@/components/UserForm'
import { useState } from 'react';




export default function Home() {

  const [showDashboard, setShowDashboard] = useState(false)

  return (
    <>
      <Head>
        <title>Xobox</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container style={{marginTop: '48px'}}>
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={12} sm={6} md={4}>
              <UserForm />
            </Grid>
          </Grid>
        </Container>
        
      </main>
    </>
  )
}
