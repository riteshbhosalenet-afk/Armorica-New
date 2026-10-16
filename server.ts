import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(express.json());

  // In-memory RFP database store
  const rfpSubmissions = new Map<string, any>();

  // Seed sample demonstration RFP for testing
  const demoRef = 'ARM-RFP-2026-104928';
  rfpSubmissions.set(demoRef, {
    referenceId: demoRef,
    companyName: 'Pune DefTech Dynamics Consortium',
    contactName: 'Commander V. K. Deshmukh',
    email: 'procurement@deftech-consortium.gov.in',
    phone: '+91 20 2588 4400',
    sector: 'Defense Technology & Supply Chain (Pune DefTech)',
    machineryName: 'Autonomous Tactical Drone Airframes & Sensor Mounts',
    quantity: '24 Tactical Units (Phase 1)',
    specifications: 'MIL-STD-810H vibration and thermal tolerance; Carbon composite shell',
    timeline: 'Within 90–180 Days',
    requiresNDA: true,
    status: 'TECHNICAL_EVALUATION',
    createdAt: new Date().toISOString()
  });

  // Health and API routes
  app.get('/api/health', (req, res) => {
    res.json({
      status: 'online',
      service: 'Armorica Technologies Full-Stack Engine',
      entity: 'Armorica Technologies LLP',
      incorporationDate: 'June 7, 2024',
      jurisdiction: 'RoC-Pune (Main Division 25)',
      location: 'Satara, Maharashtra, India',
      address: 'Shed No. W-67-A, Additional MIDC, Satara Industrial Area, Satara Kadoli Village, Satara - 415 001',
      contactPhones: ['+91 94053 92776', '+91 94220 39888'],
      email: 'riteshbhosale.net@gmail.com',
      timestamp: new Date().toISOString()
    });
  });

  // RFP Submission Endpoint
  app.post('/api/rfp', (req, res) => {
    const {
      companyName,
      contactName,
      email,
      phone,
      sector,
      machineryName,
      quantity,
      specifications,
      timeline,
      requiresNDA,
      notes
    } = req.body;

    if (!companyName || !email || !contactName) {
      return res.status(400).json({
        error: 'Company name, contact person, and corporate email are required.'
      });
    }

    const ref = `ARM-RFP-2026-${Math.floor(100000 + Math.random() * 900000)}`;
    const submission = {
      referenceId: ref,
      companyName,
      contactName,
      email,
      phone: phone || '',
      sector: sector || 'Advanced Manufacturing & Engineering',
      machineryName: machineryName || 'Custom Engineered Product',
      quantity: quantity || '1 Unit / Pilot Batch',
      specifications: specifications || '',
      timeline: timeline || 'Within 30–60 Days',
      requiresNDA: Boolean(requiresNDA),
      notes: notes || '',
      status: 'UNDER_TECHNICAL_REVIEW',
      createdAt: new Date().toISOString()
    };

    rfpSubmissions.set(ref, submission);

    return res.status(201).json({
      success: true,
      referenceId: ref,
      message: 'RFP successfully logged with Armorica Technologies Engineering Desk.',
      data: submission
    });
  });

  // Track RFP by Reference Code
  app.get('/api/rfp/:ref', (req, res) => {
    const submission = rfpSubmissions.get(req.params.ref);
    if (!submission) {
      return res.status(404).json({
        error: 'RFP reference number not found in Armorica registry.'
      });
    }
    return res.json(submission);
  });

  // Vite middleware in dev, static files in production
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  }

  app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`Armorica Technologies server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
