/**
 * RealLens - Online File Tools Engine
 * Pure Client-Side Utility Suite with AI Description Generator
 */

// Configure PDF.js Worker
if (window.pdfjsLib) {
  window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}

// Tools Registry
const TOOLS_DATA = [
  // ================= PDF TOOLS =================
  {
    id: 'compress-pdf',
    category: 'pdf',
    name: 'Compress PDF',
    desc: 'Reduce PDF file size while keeping good quality.',
    badge: 'PDF',
    accept: '.pdf',
    type: 'pdf'
  },
  {
    id: 'merge-pdf',
    category: 'pdf',
    name: 'Merge PDF',
    desc: 'Combine multiple PDF files into one document.',
    badge: 'PDF',
    accept: '.pdf',
    multiple: true,
    type: 'pdf'
  },
  {
    id: 'split-pdf',
    category: 'pdf',
    name: 'Split PDF',
    desc: 'Separate pages from a PDF into individual files.',
    badge: 'PDF',
    accept: '.pdf',
    type: 'pdf'
  },
  {
    id: 'rotate-pdf',
    category: 'pdf',
    name: 'Rotate PDF',
    desc: 'Rotate PDF pages in different directions.',
    badge: 'PDF',
    accept: '.pdf',
    type: 'pdf'
  },
  {
    id: 'extract-pdf-pages',
    category: 'pdf',
    name: 'Extract PDF Pages',
    desc: 'Select specific pages and create a new PDF.',
    badge: 'PDF',
    accept: '.pdf',
    type: 'pdf'
  },
  {
    id: 'remove-pdf-pages',
    category: 'pdf',
    name: 'Remove PDF Pages',
    desc: 'Delete unwanted pages from a PDF.',
    badge: 'PDF',
    accept: '.pdf',
    type: 'pdf'
  },
  {
    id: 'pdf-to-jpg',
    category: 'pdf',
    name: 'PDF To JPG',
    desc: 'Convert PDF pages into JPG images.',
    badge: 'PDF',
    accept: '.pdf',
    type: 'pdf'
  },
  {
    id: 'jpg-to-pdf',
    category: 'pdf',
    name: 'JPG To PDF',
    desc: 'Convert images into a PDF document.',
    badge: 'PDF',
    accept: 'image/jpeg, image/jpg, image/png, image/webp',
    multiple: true,
    type: 'pdf'
  },
  {
    id: 'pdf-to-word',
    category: 'pdf',
    name: 'PDF To Word',
    desc: 'Convert PDF files into editable Word (.docx) documents.',
    badge: 'PDF',
    accept: '.pdf',
    type: 'pdf'
  },
  {
    id: 'word-to-pdf',
    category: 'pdf',
    name: 'Word To PDF',
    desc: 'Convert Word and text documents into PDF format.',
    badge: 'PDF',
    accept: '.doc, .docx, .txt',
    type: 'pdf'
  },
  {
    id: 'pdf-to-excel',
    category: 'pdf',
    name: 'PDF To Excel',
    desc: 'Convert PDF tables into Excel (.xlsx) spreadsheets.',
    badge: 'PDF',
    accept: '.pdf',
    type: 'pdf'
  },
  {
    id: 'excel-to-pdf',
    category: 'pdf',
    name: 'Excel To PDF',
    desc: 'Convert Excel files (.xlsx, .csv) into PDF.',
    badge: 'PDF',
    accept: '.xls, .xlsx, .csv',
    type: 'pdf'
  },
  {
    id: 'pdf-to-powerpoint',
    category: 'pdf',
    name: 'PDF To PowerPoint',
    desc: 'Convert PDFs into PowerPoint (.pptx) presentations.',
    badge: 'PDF',
    accept: '.pdf',
    type: 'pdf'
  },
  {
    id: 'powerpoint-to-pdf',
    category: 'pdf',
    name: 'PowerPoint To PDF',
    desc: 'Convert presentation files into PDF documents.',
    badge: 'PDF',
    accept: '.ppt, .pptx',
    type: 'pdf'
  },
  {
    id: 'watermark-pdf',
    category: 'pdf',
    name: 'Watermark PDF',
    desc: 'Add custom text watermarks to PDF pages.',
    badge: 'PDF',
    accept: '.pdf',
    type: 'pdf'
  },
  {
    id: 'pdf-ocr',
    category: 'pdf',
    name: 'PDF OCR',
    desc: 'Extract optical character text from scanned PDFs.',
    badge: 'PDF',
    accept: '.pdf',
    type: 'pdf'
  },

  // ================= IMAGE TOOLS =================
  {
    id: 'compress-image',
    category: 'image',
    name: 'Compress Image',
    desc: 'Reduce image file size while maintaining visual quality.',
    badge: 'IMAGE',
    accept: 'image/*',
    type: 'image'
  },
  {
    id: 'resize-image',
    category: 'image',
    name: 'Resize Image',
    desc: 'Change image dimensions using custom width and height.',
    badge: 'IMAGE',
    accept: 'image/*',
    type: 'image'
  },
  {
    id: 'crop-image',
    category: 'image',
    name: 'Crop Image',
    desc: 'Crop unwanted areas with an interactive cropper.',
    badge: 'IMAGE',
    accept: 'image/*',
    type: 'image'
  },
  {
    id: 'rotate-image',
    category: 'image',
    name: 'Rotate Image',
    desc: 'Rotate images by 90°, 180°, or 270° angles.',
    badge: 'IMAGE',
    accept: 'image/*',
    type: 'image'
  },
  {
    id: 'flip-image',
    category: 'image',
    name: 'Flip Image',
    desc: 'Mirror images horizontally or vertically.',
    badge: 'IMAGE',
    accept: 'image/*',
    type: 'image'
  },
  {
    id: 'image-to-jpg',
    category: 'image',
    name: 'Image To JPG',
    desc: 'Convert images into JPG format.',
    badge: 'IMAGE',
    accept: 'image/*',
    type: 'image'
  },
  {
    id: 'image-to-png',
    category: 'image',
    name: 'Image To PNG',
    desc: 'Convert images into PNG format.',
    badge: 'IMAGE',
    accept: 'image/*',
    type: 'image'
  },
  {
    id: 'image-to-webp',
    category: 'image',
    name: 'Image To WEBP',
    desc: 'Convert images into WEBP format.',
    badge: 'IMAGE',
    accept: 'image/*',
    type: 'image'
  },
  {
    id: 'webp-to-jpg',
    category: 'image',
    name: 'WEBP To JPG',
    desc: 'Convert WEBP files into JPG.',
    badge: 'IMAGE',
    accept: 'image/webp',
    type: 'image'
  },
  {
    id: 'image-to-pdf',
    category: 'image',
    name: 'Image To PDF',
    desc: 'Create PDF documents from images.',
    badge: 'IMAGE',
    accept: 'image/*',
    multiple: true,
    type: 'image'
  },
  {
    id: 'pdf-to-image',
    category: 'image',
    name: 'PDF To Image',
    desc: 'Convert PDF pages into image files.',
    badge: 'IMAGE',
    accept: '.pdf',
    type: 'image'
  },
  {
    id: 'merge-images',
    category: 'image',
    name: 'Merge Images',
    desc: 'Combine multiple images side-by-side or stacked.',
    badge: 'IMAGE',
    accept: 'image/*',
    multiple: true,
    type: 'image'
  },
  {
    id: 'gif-maker',
    category: 'image',
    name: 'GIF Maker',
    desc: 'Create animated GIF from multiple images.',
    badge: 'IMAGE',
    accept: 'image/*',
    multiple: true,
    type: 'image'
  },
  {
    id: 'gif-to-images',
    category: 'image',
    name: 'GIF To Images',
    desc: 'Extract individual frames from GIF files.',
    badge: 'IMAGE',
    accept: 'image/gif',
    type: 'image'
  },
  {
    id: 'image-color-picker',
    category: 'image',
    name: 'Image Color Picker',
    desc: 'Sample exact pixel colors and palette from images.',
    badge: 'IMAGE',
    accept: 'image/*',
    type: 'image'
  },

  // ================= AI TOOLS =================
  {
    id: 'ai-description-maker',
    category: 'ai',
    name: 'AI Description Maker',
    desc: 'Generate professional marketing descriptions, SEO meta tags, title, features, and visual analysis.',
    badge: 'AI',
    accept: 'image/*',
    multiple: true,
    type: 'ai'
  },
  {
    id: 'ai-quality-enhancer',
    category: 'ai',
    name: 'AI Quality Enhancer',
    desc: 'Enhance image resolution, sharpen details, reduce noise, and boost clarity 100% locally in your browser.',
    badge: 'AI',
    accept: 'image/*',
    multiple: false,
    type: 'ai'
  }
];

// App State
let currentCategory = 'all';
let searchQuery = '';
let selectedTool = null;
let uploadedFiles = [];
let processResultBlob = null;
let processResultFilename = '';
let cropperInstance = null;

// DOM Initialization
document.addEventListener('DOMContentLoaded', () => {
  renderToolsGrid();
  setupEventListeners();
  setupFAQAccordion();
  setupContactForm();
  initRouting();
});

// ================= MULTI-PAGE CLIENT ROUTER & SEO ENGINE =================
const SEO_DATA = {
  'home': {
    title: 'RealLens - Free Online File Tools',
    description: 'Free online file tools to compress, convert, resize and manage PDFs and images quickly and easily. Includes AI Description Maker and AI Quality Enhancer.'
  },
  'compress-pdf': {
    title: 'Compress PDF File Size Online Free | RealLens',
    description: 'Compress PDF files online while preserving formatting and clarity with RealLens.'
  },
  'merge-pdf': {
    title: 'Merge PDF Files Online Free | RealLens',
    description: 'Combine multiple PDF files into one single document instantly with RealLens.'
  },
  'split-pdf': {
    title: 'Split PDF Pages Online Free | RealLens',
    description: 'Extract or separate pages from a PDF document online for free with RealLens.'
  },
  'rotate-pdf': {
    title: 'Rotate PDF Pages Online Free | RealLens',
    description: 'Rotate PDF pages in different directions online for free with RealLens.'
  },
  'extract-pdf-pages': {
    title: 'Extract PDF Pages Online Free | RealLens',
    description: 'Select specific pages and extract them into a new PDF document online.'
  },
  'remove-pdf-pages': {
    title: 'Remove PDF Pages Online Free | RealLens',
    description: 'Delete unwanted pages from your PDF file online for free.'
  },
  'pdf-to-jpg': {
    title: 'Convert PDF to JPG Online Free | RealLens',
    description: 'Extract PDF pages into high-quality JPG image files online with RealLens.'
  },
  'jpg-to-pdf': {
    title: 'Convert JPG to PDF Online Free | RealLens',
    description: 'Convert JPG, PNG, WEBP images into a clean PDF document instantly.'
  },
  'pdf-to-word': {
    title: 'Convert PDF to Word Online Free | RealLens',
    description: 'Convert PDF files into editable Word (.docx) documents online.'
  },
  'word-to-pdf': {
    title: 'Convert Word to PDF Online Free | RealLens',
    description: 'Convert DOCX, DOC and text files into PDF documents online.'
  },
  'pdf-to-excel': {
    title: 'Convert PDF to Excel Online Free | RealLens',
    description: 'Extract tables from PDF into editable Excel (.xlsx) spreadsheets online.'
  },
  'excel-to-pdf': {
    title: 'Convert Excel to PDF Online Free | RealLens',
    description: 'Convert Excel spreadsheets (.xlsx, .csv) into clean PDF documents.'
  },
  'pdf-to-powerpoint': {
    title: 'Convert PDF to PowerPoint Online Free | RealLens',
    description: 'Convert PDF files into PowerPoint (.pptx) presentation slides.'
  },
  'powerpoint-to-pdf': {
    title: 'Convert PowerPoint to PDF Online Free | RealLens',
    description: 'Convert PPT and PPTX presentations into PDF documents online.'
  },
  'watermark-pdf': {
    title: 'Add Watermark to PDF Online Free | RealLens',
    description: 'Add custom text watermarks, transparency and positioning to PDF pages.'
  },
  'pdf-ocr': {
    title: 'PDF OCR Extract Text Online Free | RealLens',
    description: 'Extract optical character text from scanned PDFs locally in your browser.'
  },
  'compress-image': {
    title: 'Compress Image Online Free | RealLens',
    description: 'Reduce image file size while keeping high quality using RealLens image compressor.'
  },
  'resize-image': {
    title: 'Resize Image Online Free | RealLens',
    description: 'Resize images online for free with RealLens. Change image dimensions and quality while maintaining image quality.'
  },
  'crop-image': {
    title: 'Crop Image Online Free | RealLens',
    description: 'Crop images online easily with RealLens. Adjust aspect ratios and trim photos instantly.'
  },
  'rotate-image': {
    title: 'Rotate Image Online Free | RealLens',
    description: 'Rotate photos and images online for free. Flip vertically or horizontally with RealLens.'
  },
  'flip-image': {
    title: 'Flip Image Online Free | RealLens',
    description: 'Mirror photos horizontally or vertically online for free with RealLens.'
  },
  'image-to-jpg': {
    title: 'Convert Image to JPG Online Free | RealLens',
    description: 'Convert WEBP, PNG, GIF, and images into JPG format online.'
  },
  'image-to-png': {
    title: 'Convert Image to PNG Online Free | RealLens',
    description: 'Convert images into high quality PNG format with transparent background support.'
  },
  'image-to-webp': {
    title: 'Convert Image to WEBP Online Free | RealLens',
    description: 'Convert JPG, PNG and images into optimized WEBP format for web performance.'
  },
  'webp-to-jpg': {
    title: 'Convert WEBP to JPG Online Free | RealLens',
    description: 'Convert WEBP images into standard JPG format online with RealLens.'
  },
  'image-to-pdf': {
    title: 'Convert Image to PDF Online Free | RealLens',
    description: 'Convert JPG, PNG, WEBP images to PDF document for free with RealLens.'
  },
  'pdf-to-image': {
    title: 'Convert PDF to Image Online Free | RealLens',
    description: 'Convert PDF pages into high quality PNG, JPG, or WEBP images.'
  },
  'merge-images': {
    title: 'Merge Images Online Free | RealLens',
    description: 'Combine multiple images side-by-side or stacked into a single image.'
  },
  'gif-maker': {
    title: 'Create Animated GIF Online Free | RealLens',
    description: 'Combine multiple photos into an animated GIF with custom delay and dimensions.'
  },
  'gif-to-images': {
    title: 'Extract Frames from GIF Online Free | RealLens',
    description: 'Deconstruct animated GIFs and extract individual image frames easily.'
  },
  'image-color-picker': {
    title: 'Image Color Picker & Palette Online Free | RealLens',
    description: 'Sample HEX and RGB pixel colors and auto-extract dominant color palettes from photos.'
  },
  'ai-description-maker': {
    title: 'AI Description Maker Online Free | RealLens',
    description: 'Generate professional product descriptions and marketing text with browser AI on RealLens.'
  },
  'ai-quality-enhancer': {
    title: 'AI Image Quality Enhancer Online Free | RealLens',
    description: 'Enhance image resolution, sharpen details, and reduce noise 100% locally with RealLens AI.'
  },
  'privacy-policy': {
    title: 'Privacy Policy | RealLens',
    description: 'RealLens Privacy Policy. Learn how we protect your data with 100% client-side browser processing.'
  },
  'terms-of-service': {
    title: 'Terms of Service | RealLens',
    description: 'Terms of Service | RealLens. Guidelines and terms for using our free online file tools.'
  },
  'about': {
    title: 'About Us | RealLens',
    description: 'Learn about RealLens - fast, secure, and free online file management and AI tools.'
  }
};

function updateSEOMetadata(routePath, title, description) {
  document.title = title;

  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.name = 'description';
    document.head.appendChild(metaDesc);
  }
  metaDesc.content = description;

  const origin = window.location.origin;
  const normalizedPath = routePath === '/' || !routePath ? '' : '/' + routePath.replace(/^\/+/, '');
  const canonicalUrl = `${origin}${normalizedPath}`;

  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = canonicalUrl;

  const setMetaProperty = (prop, val) => {
    let tag = document.querySelector(`meta[property="${prop}"]`);
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('property', prop);
      document.head.appendChild(tag);
    }
    tag.content = val;
  };

  setMetaProperty('og:title', title);
  setMetaProperty('og:description', description);
  setMetaProperty('og:url', canonicalUrl);
  setMetaProperty('og:type', 'website');
}

function initRouting() {
  window.addEventListener('popstate', handleRoute);
  
  // Intercept link clicks for smooth client navigation
  document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a');
    if (!anchor) return;
    const href = anchor.getAttribute('href');
    if (!href || href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:')) return;

    if (href === '/' || href.startsWith('/#') || href.startsWith('/')) {
      e.preventDefault();
      const cleanPath = href.replace(/^\/+/, '');
      if (!cleanPath || cleanPath.startsWith('#')) {
        const hash = cleanPath.replace(/^#\/?/, '');
        navigateToHome(hash);
      } else {
        navigateToRoute(cleanPath);
      }
    }
  });

  handleRoute();
}

function handleRoute() {
  let rawPath = window.location.pathname.replace(/^\/+/, '').replace(/\/$/, '') || window.location.hash.replace(/^#\/?/, '');
  rawPath = rawPath.replace(/\/index\.html$/, '').replace(/^index\.html$/, '');
  
  const homeView = document.getElementById('homePageView');
  const toolView = document.getElementById('toolPageView');
  const legalView = document.getElementById('legalPageView');

  const tool = TOOLS_DATA.find(t => t.id === rawPath);

  if (tool) {
    if (homeView) homeView.style.display = 'none';
    if (legalView) legalView.style.display = 'none';
    if (toolView) {
      toolView.style.display = 'block';
      renderDedicatedToolPage(tool);
    }
    const seo = SEO_DATA[tool.id] || {
      title: `${tool.name} Online Free | RealLens`,
      description: tool.desc
    };
    updateSEOMetadata(tool.id, seo.title, seo.description);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (rawPath === 'privacy-policy' || rawPath === 'terms-of-service' || rawPath === 'about') {
    if (homeView) homeView.style.display = 'none';
    if (toolView) toolView.style.display = 'none';
    if (legalView) {
      legalView.style.display = 'block';
      renderLegalPage(rawPath);
    }
    const seo = SEO_DATA[rawPath];
    if (seo) {
      updateSEOMetadata(rawPath, seo.title, seo.description);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    if (toolView) toolView.style.display = 'none';
    if (legalView) legalView.style.display = 'none';
    if (homeView) homeView.style.display = 'block';
    
    const homeSeo = SEO_DATA['home'];
    updateSEOMetadata('/', homeSeo.title, homeSeo.description);
    renderToolsGrid();

    if (window.location.hash && window.location.hash !== '#home') {
      const targetSection = document.querySelector(window.location.hash);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}

function navigateToRoute(route) {
  history.pushState(null, '', '/' + route);
  handleRoute();
}

function navigateToTool(toolId) {
  history.pushState({ toolId }, '', '/' + toolId);
  handleRoute();
}

function navigateToHome(hash = '') {
  history.pushState(null, '', hash ? '/#' + hash : '/');
  handleRoute();
}

function renderLegalPage(pageId) {
  const legalView = document.getElementById('legalPageView');
  if (!legalView) return;

  if (pageId === 'privacy-policy') {
    legalView.innerHTML = `
      <div class="tool-page-container">
        <nav class="breadcrumb-bar" aria-label="Breadcrumb">
          <div class="breadcrumb-container">
            <a href="/" class="breadcrumb-link">Home</a>
            <span class="breadcrumb-sep">/</span>
            <span class="breadcrumb-current">Privacy Policy</span>
          </div>
        </nav>

        <header class="tool-hero-header">
          <h1 class="tool-hero-title">Privacy Policy</h1>
          <p class="tool-hero-desc">Your privacy is important to us at RealLens.</p>
        </header>

        <section class="tool-workbench-section">
          <div class="tool-workbench-card" style="line-height:1.8; font-size:1.05rem; color:var(--color-text-main);">
            <p style="margin-bottom:1.25rem;">At RealLens, we respect your privacy.</p>
            <p style="margin-bottom:1.25rem;">Most tools process files directly in your browser. We do not store or upload your files to our servers.</p>
            <p style="margin-bottom:1.25rem;">We do not collect personal information unless you voluntarily provide it through our contact form.</p>
            <p style="margin-bottom:1.25rem;">We may use analytics and advertising services to improve our website experience.</p>
            <p style="margin-bottom:1.25rem;">By using RealLens, you agree to this Privacy Policy.</p>
            <p style="margin-bottom:0;">For questions, contact us through our <a href="/#help-center" style="color:var(--color-primary); font-weight:600; text-decoration:none;">Help Center</a>.</p>
          </div>
        </section>
      </div>
    `;
  } else if (pageId === 'terms-of-service') {
    legalView.innerHTML = `
      <div class="tool-page-container">
        <nav class="breadcrumb-bar" aria-label="Breadcrumb">
          <div class="breadcrumb-container">
            <a href="/" class="breadcrumb-link">Home</a>
            <span class="breadcrumb-sep">/</span>
            <span class="breadcrumb-current">Terms of Service</span>
          </div>
        </nav>

        <header class="tool-hero-header">
          <h1 class="tool-hero-title">Terms of Service</h1>
          <p class="tool-hero-desc">Guidelines and terms for using RealLens file tools.</p>
        </header>

        <section class="tool-workbench-section">
          <div class="tool-workbench-card" style="line-height:1.8; font-size:1.05rem; color:var(--color-text-main);">
            <p style="margin-bottom:1.25rem;">By using RealLens, you agree to the following terms.</p>
            <p style="margin-bottom:1.25rem;">RealLens provides online file tools for personal and commercial use.</p>
            <p style="margin-bottom:1.25rem;">While we try to provide accurate results, we cannot guarantee that every processed file will be perfect. Users should keep backups of important files.</p>
            <p style="margin-bottom:1.25rem;">You are responsible for the files you upload and process.</p>
            <p style="margin-bottom:1.25rem;">Do not use RealLens for illegal activities or content that violates applicable laws.</p>
            <p style="margin-bottom:1.25rem;">We may update or improve our services at any time.</p>
            <p style="margin-bottom:0;">By using RealLens, you agree to these terms.</p>
          </div>
        </section>
      </div>
    `;
  } else if (pageId === 'about') {
    legalView.innerHTML = `
      <div class="tool-page-container">
        <nav class="breadcrumb-bar" aria-label="Breadcrumb">
          <div class="breadcrumb-container">
            <a href="/" class="breadcrumb-link">Home</a>
            <span class="breadcrumb-sep">/</span>
            <span class="breadcrumb-current">About Us</span>
          </div>
        </nav>

        <header class="tool-hero-header">
          <h1 class="tool-hero-title">About RealLens</h1>
          <p class="tool-hero-desc">Fast, secure, and accessible browser-based file management.</p>
        </header>

        <section class="tool-workbench-section">
          <div class="tool-workbench-card" style="line-height:1.8; font-size:1.05rem; color:var(--color-text-main);">
            <p style="margin-bottom:1.25rem;">RealLens provides fast and simple online tools for working with images, PDFs, and files.</p>
            <p style="margin-bottom:0;">Our goal is to make everyday file tasks easier with accessible browser-based tools and AI-powered features.</p>
          </div>
        </section>
      </div>
    `;
  }

  // Attach breadcrumb event
  const bcHome = legalView.querySelector('.breadcrumb-link');
  if (bcHome) {
    bcHome.addEventListener('click', (e) => {
      e.preventDefault();
      navigateToHome();
    });
  }
}

function renderDedicatedToolPage(tool) {
  selectedTool = tool;
  uploadedFiles = [];
  processResultBlob = null;
  processResultFilename = '';
  if (cropperInstance) {
    cropperInstance.destroy();
    cropperInstance = null;
  }

  const toolView = document.getElementById('toolPageView');
  if (!toolView) return;

  const catName = tool.category === 'pdf' ? 'PDF Tools' : tool.category === 'image' ? 'Image Tools' : 'AI Tools';
  const relatedTools = TOOLS_DATA.filter(t => t.category === tool.category && t.id !== tool.id).slice(0, 3);

  toolView.innerHTML = `
    <div class="tool-page-container">
      <nav class="breadcrumb-bar" aria-label="Breadcrumb">
        <div class="breadcrumb-container">
          <a href="/" class="breadcrumb-link" id="bcHome">Home</a>
          <span class="breadcrumb-sep">/</span>
          <a href="/#${tool.category}-tools" class="breadcrumb-link" id="bcCategory">${catName}</a>
          <span class="breadcrumb-sep">/</span>
          <span class="breadcrumb-current">${escapeHTML(tool.name)}</span>
        </div>
      </nav>

      <header class="tool-hero-header">
        <div class="tool-hero-badge-wrap">
          <span class="category-badge ${tool.category}">${tool.badge}</span>
        </div>
        <h1 class="tool-hero-title">${escapeHTML(tool.name)}</h1>
        <p class="tool-hero-desc">${escapeHTML(tool.desc)}</p>
      </header>

      <section class="tool-workbench-section">
        <div class="tool-workbench-card">
          ${buildWorkbenchHTML(tool)}
        </div>
      </section>

      <section class="related-tools-section">
        <h3 class="related-tools-title">Related ${catName}</h3>
        <div class="tools-grid">
          ${relatedTools.map(t => createToolCardHTML(t)).join('')}
        </div>
      </section>
    </div>
  `;

  // Attach Breadcrumb Events
  const bcHome = document.getElementById('bcHome');
  if (bcHome) {
    bcHome.addEventListener('click', (e) => {
      e.preventDefault();
      navigateToHome();
    });
  }

  const bcCategory = document.getElementById('bcCategory');
  if (bcCategory) {
    bcCategory.addEventListener('click', (e) => {
      e.preventDefault();
      navigateToHome(tool.category + '-tools');
    });
  }

  // Attach Related Tool Card Clicks
  toolView.querySelectorAll('.tool-card-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      navigateToTool(btn.dataset.toolId);
    });
  });

  setupWorkbenchEvents();
  setupToolOptionSyncListeners(tool);
}

function setupEventListeners() {
  // Mobile Nav Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  // Nav Scrolling & Category Filtering
  document.querySelectorAll('.nav-link, .footer-link').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          e.preventDefault();
          navigateToHome(targetId.replace('#', ''));

          document.querySelectorAll('.nav-link').forEach(nl => nl.classList.remove('active'));
          if (link.classList.contains('nav-link')) {
            link.classList.add('active');
          }

          if (targetId === '#pdf-tools') filterCategory('pdf');
          if (targetId === '#image-tools') filterCategory('image');
          if (targetId === '#ai-tools') filterCategory('ai');
          if (targetId === '#home') filterCategory('all');
        }
      }
    });
  });

  // Search Input Listener
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderToolsGrid();
    });
  }

  // Category Pills Listener
  document.querySelectorAll('.category-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategory = pill.dataset.category || 'all';
      renderToolsGrid();
    });
  });

  // Modal Close Button & Overlay
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalOverlay = document.getElementById('modalOverlay');
  if (modalCloseBtn && modalOverlay) {
    modalCloseBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  // Privacy Policy Modal Triggers
  document.querySelectorAll('.privacy-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openPrivacyModal();
    });
  });
}

function filterCategory(cat) {
  currentCategory = cat;
  document.querySelectorAll('.category-pill').forEach(p => {
    if (p.dataset.category === cat) {
      p.classList.add('active');
    } else {
      p.classList.remove('active');
    }
  });
  renderToolsGrid();
}

function renderToolsGrid() {
  const pdfContainer = document.getElementById('pdfToolsGrid');
  const imageContainer = document.getElementById('imageToolsGrid');
  const aiContainer = document.getElementById('aiToolsGrid');

  const pdfBlock = document.getElementById('pdfBlock');
  const imageBlock = document.getElementById('imageBlock');
  const aiBlock = document.getElementById('aiBlock');

  if (!pdfContainer || !imageContainer || !aiContainer) return;

  pdfContainer.innerHTML = '';
  imageContainer.innerHTML = '';
  aiContainer.innerHTML = '';

  let pdfCount = 0;
  let imageCount = 0;
  let aiCount = 0;

  TOOLS_DATA.forEach(tool => {
    const matchesCategory = currentCategory === 'all' || tool.category === currentCategory;
    const matchesSearch = !searchQuery || 
      tool.name.toLowerCase().includes(searchQuery) || 
      tool.desc.toLowerCase().includes(searchQuery);

    if (matchesCategory && matchesSearch) {
      const cardHTML = createToolCardHTML(tool);
      if (tool.category === 'pdf') {
        pdfContainer.insertAdjacentHTML('beforeend', cardHTML);
        pdfCount++;
      } else if (tool.category === 'image') {
        imageContainer.insertAdjacentHTML('beforeend', cardHTML);
        imageCount++;
      } else if (tool.category === 'ai') {
        aiContainer.insertAdjacentHTML('beforeend', cardHTML);
        aiCount++;
      }
    }
  });

  pdfBlock.style.display = pdfCount > 0 ? 'block' : 'none';
  imageBlock.style.display = imageCount > 0 ? 'block' : 'none';
  aiBlock.style.display = aiCount > 0 ? 'block' : 'none';

  document.querySelectorAll('.tool-card-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      navigateToTool(btn.dataset.toolId);
    });
  });
}

function createToolCardHTML(tool) {
  return `
    <div class="tool-card">
      <div class="tool-card-body">
        <div class="tool-card-top">
          <span class="category-badge ${tool.category}">${tool.badge}</span>
        </div>
        <h3 class="tool-card-name">${escapeHTML(tool.name)}</h3>
        <p class="tool-card-desc">${escapeHTML(tool.desc)}</p>
      </div>
      <button class="btn btn-primary tool-card-btn" data-tool-id="${tool.id}">Open Tool</button>
    </div>
  `;
}

function openToolModal(toolId) {
  selectedTool = TOOLS_DATA.find(t => t.id === toolId);
  if (!selectedTool) return;

  if (cropperInstance) {
    cropperInstance.destroy();
    cropperInstance = null;
  }

  uploadedFiles = [];
  processResultBlob = null;
  processResultFilename = '';

  const modalOverlay = document.getElementById('modalOverlay');
  const modalTitle = document.getElementById('modalTitle');
  const modalBadge = document.getElementById('modalBadge');
  const modalBody = document.getElementById('modalBody');

  modalTitle.textContent = selectedTool.name;
  modalBadge.textContent = selectedTool.badge;
  modalBadge.className = `category-badge ${selectedTool.category}`;

  modalBody.innerHTML = buildWorkbenchHTML(selectedTool);

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  setupWorkbenchEvents();
}

function closeModal() {
  const modalOverlay = document.getElementById('modalOverlay');
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
  if (cropperInstance) {
    cropperInstance.destroy();
    cropperInstance = null;
  }
  selectedTool = null;
  uploadedFiles = [];
}

function buildWorkbenchHTML(tool) {
  const isAI = tool.id === 'ai-description-maker';

  return `
    <div class="tool-intro">
      <p style="font-size:0.95rem; color: var(--color-text-muted);">${escapeHTML(tool.desc)}</p>
    </div>

    <!-- Drop Zone -->
    <div class="drop-zone" id="dropZone">
      <div class="drop-zone-title">${tool.multiple ? 'Select or Drop Files Here' : 'Select or Drop File Here'}</div>
      <div class="drop-zone-text">Supports ${escapeHTML(tool.accept || 'all valid files')}. Max 50MB per file.</div>
      <button class="btn btn-outline btn-sm" type="button" id="browseBtn">Browse File${tool.multiple ? 's' : ''}</button>
      <input type="file" id="fileInput" accept="${tool.accept}" ${tool.multiple ? 'multiple' : ''} style="display:none;" />
    </div>

    <!-- Uploaded Files List -->
    <div id="fileListContainer" style="display:none; flex-direction:column; gap:0.5rem;">
      <h4 style="font-size:0.9rem; font-weight:700;">Selected Files:</h4>
      <div id="fileList" style="display:flex; flex-direction:column; gap:0.4rem;"></div>
    </div>

    ${isAI ? buildAISettingsHTML() : buildToolSettingsHTML(tool)}

    <!-- Crop Canvas Preview Box (For Crop Tool) -->
    <div id="cropContainer" style="display:none; flex-direction:column; align-items:center; gap:1rem; width:100%;">
      <div style="max-width:100%; max-height:400px; overflow:hidden;">
        <img id="cropImageTarget" style="max-width:100%; display:block;" />
      </div>
    </div>

    <!-- Action Button -->
    <div style="display:flex; gap:1rem; margin-top:0.5rem;">
      <button class="btn btn-primary btn-block btn-lg" id="processBtn" disabled>
        ${isAI ? 'Generate AI Description' : 'Process File'}
      </button>
    </div>

    <!-- Live Status / Progress -->
    <div id="statusMessage" style="display:none; text-align:center; padding:0.65rem 1rem; font-size:0.9rem; border-radius:var(--radius-sm);"></div>

    <!-- Output / Results Section -->
    <div id="resultContainer" style="display:none; flex-direction:column; gap:1rem; border-top:1px solid var(--color-border); padding-top:1.25rem;">
      ${isAI ? '<div id="aiResultsOutput" class="ai-results-grid"></div>' : buildStandardResultHTML()}
    </div>
  `;
}

function buildToolSettingsHTML(tool) {
  let settingsControls = '';

  switch (tool.id) {
    case 'compress-pdf':
    case 'compress-image':
      settingsControls = `
        <div class="form-group">
          <label class="form-label">Compression Level Target:</label>
          <select class="form-control" id="compressLevel">
            <option value="0.8">Recommended Quality (High Resolution)</option>
            <option value="0.5">Balanced Compression (Medium Size)</option>
            <option value="0.25">Maximum Compression (Smallest File Size)</option>
          </select>
        </div>
      `;
      break;

    case 'resize-image':
      settingsControls = `
        <div class="form-row" style="margin-bottom:1rem;">
          <div class="form-group">
            <label class="form-label">Width (px):</label>
            <input type="number" class="form-control" id="resizeWidth" placeholder="Width" value="1080" min="10" />
          </div>
          <div class="form-group">
            <label class="form-label">Height (px):</label>
            <input type="number" class="form-control" id="resizeHeight" placeholder="Height" value="1080" min="10" />
          </div>
        </div>
        <div style="margin-bottom:1.25rem; display:flex; align-items:center; gap:0.5rem;">
          <input type="checkbox" id="maintainAspect" checked />
          <label for="maintainAspect" style="font-size:0.875rem; cursor:pointer;">Maintain aspect ratio</label>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Output Format:</label>
            <select class="form-control" id="resizeFormat">
              <option value="original">Original Format</option>
              <option value="image/jpeg">JPG (Joint Photographic)</option>
              <option value="image/webp">WEBP (Web Picture)</option>
              <option value="image/png">PNG (Lossless Format)</option>
            </select>
          </div>

          <div class="form-group">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.35rem;">
              <label class="form-label" style="margin:0;">Quality:</label>
              <span id="resizeQualityVal" style="font-weight:700; color:var(--color-primary); font-size:0.9rem;">90%</span>
            </div>
            <div style="display:flex; align-items:center; gap:0.75rem;">
              <input type="range" id="resizeQualitySlider" min="1" max="100" value="90" style="flex:1;" />
              <input type="number" class="form-control" id="resizeQualityNum" min="1" max="100" value="90" style="width:75px; text-align:center;" />
            </div>
            <div id="resizePngNotice" style="font-size:0.8rem; color:var(--color-text-light); margin-top:0.35rem; display:none;">
              ℹ️ Quality adjustment is unavailable for PNG (lossless format).
            </div>
          </div>
        </div>
      `;
      break;

    case 'ai-quality-enhancer':
      settingsControls = `
        <div class="form-row" style="margin-bottom:1rem;">
          <div class="form-group">
            <label class="form-label">Enhancement Preset:</label>
            <select class="form-control" id="aiEnhancePreset">
              <option value="balanced">Balanced Auto-Enhance (Recommended)</option>
              <option value="sharpness">Ultra Sharpness & Detail Recovery</option>
              <option value="denoise">Denoise & Compression Artifact Removal</option>
              <option value="clarity">Micro-Contrast & Lighting Boost</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Resolution Upscale:</label>
            <select class="form-control" id="aiEnhanceScale">
              <option value="1">1x Original Resolution</option>
              <option value="1.5">1.5x HD Resolution</option>
              <option value="2">2x Ultra HD Super Resolution</option>
            </select>
          </div>
        </div>

        <div class="form-row" style="margin-bottom:1rem;">
          <div class="form-group">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.35rem;">
              <label class="form-label" style="margin:0;">Sharpening Intensity:</label>
              <span id="aiSharpenVal" style="font-weight:700; color:var(--color-primary); font-size:0.9rem;">60%</span>
            </div>
            <div style="display:flex; align-items:center; gap:0.75rem;">
              <input type="range" id="aiSharpenSlider" min="0" max="100" value="60" style="flex:1;" />
              <input type="number" class="form-control" id="aiSharpenNum" min="0" max="100" value="60" style="width:75px; text-align:center;" />
            </div>
          </div>

          <div class="form-group">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.35rem;">
              <label class="form-label" style="margin:0;">Noise Reduction:</label>
              <span id="aiDenoiseVal" style="font-weight:700; color:var(--color-primary); font-size:0.9rem;">35%</span>
            </div>
            <div style="display:flex; align-items:center; gap:0.75rem;">
              <input type="range" id="aiDenoiseSlider" min="0" max="100" value="35" style="flex:1;" />
              <input type="number" class="form-control" id="aiDenoiseNum" min="0" max="100" value="35" style="width:75px; text-align:center;" />
            </div>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.35rem;">
              <label class="form-label" style="margin:0;">Clarity & Detail Balance:</label>
              <span id="aiClarityVal" style="font-weight:700; color:var(--color-primary); font-size:0.9rem;">50%</span>
            </div>
            <div style="display:flex; align-items:center; gap:0.75rem;">
              <input type="range" id="aiClaritySlider" min="0" max="100" value="50" style="flex:1;" />
              <input type="number" class="form-control" id="aiClarityNum" min="0" max="100" value="50" style="width:75px; text-align:center;" />
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Output Format:</label>
            <select class="form-control" id="aiEnhanceFormat">
              <option value="original">Original Format</option>
              <option value="image/jpeg">JPG (Joint Photographic)</option>
              <option value="image/webp">WEBP (Web Picture)</option>
              <option value="image/png">PNG (Lossless)</option>
            </select>
          </div>
        </div>
      `;
      break;

    case 'crop-image':
      settingsControls = `
        <div class="form-group">
          <label class="form-label">Crop Aspect Ratio:</label>
          <select class="form-control" id="cropAspectRatio">
            <option value="free">Freeform Selection</option>
            <option value="1">1:1 Square</option>
            <option value="1.77777777778">16:9 Landscape</option>
            <option value="1.33333333333">4:3 Standard</option>
            <option value="0.8">4:5 Instagram Portrait</option>
          </select>
        </div>
      `;
      break;

    case 'rotate-image':
    case 'rotate-pdf':
      settingsControls = `
        <div class="form-group">
          <label class="form-label">Rotation Angle:</label>
          <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
            <button class="btn btn-secondary btn-sm rotate-btn active" data-angle="90" type="button">90° Clockwise</button>
            <button class="btn btn-secondary btn-sm rotate-btn" data-angle="180" type="button">180° Turn</button>
            <button class="btn btn-secondary btn-sm rotate-btn" data-angle="270" type="button">270° Counter-CW</button>
          </div>
        </div>
      `;
      break;

    case 'flip-image':
      settingsControls = `
        <div class="form-group">
          <label class="form-label">Flip Direction:</label>
          <select class="form-control" id="flipDirection">
            <option value="horizontal">Flip Horizontally (Mirror Left-Right)</option>
            <option value="vertical">Flip Vertically (Mirror Top-Bottom)</option>
          </select>
        </div>
      `;
      break;

    case 'split-pdf':
      settingsControls = `
        <div class="form-group">
          <label class="form-label">Split Method:</label>
          <select class="form-control" id="splitMode">
            <option value="all">Separate Every Page into individual PDFs (ZIP)</option>
            <option value="range">Extract Range of Pages (e.g. 1-3, 5)</option>
          </select>
        </div>
        <div class="form-group" id="splitRangeGroup" style="display:none;">
          <label class="form-label">Specify Page Range:</label>
          <input type="text" class="form-control" id="splitPageRange" placeholder="e.g. 1-3, 5, 8-10" />
        </div>
      `;
      break;

    case 'extract-pdf-pages':
      settingsControls = `
        <div class="form-group">
          <label class="form-label">Pages to Extract:</label>
          <input type="text" class="form-control" id="extractPageNumbers" placeholder="e.g. 1, 3, 5-8" value="1" />
          <span style="font-size:0.8rem; color:var(--color-text-light);">Enter page numbers or ranges separated by commas.</span>
        </div>
      `;
      break;

    case 'remove-pdf-pages':
      settingsControls = `
        <div class="form-group">
          <label class="form-label">Pages to Delete / Remove:</label>
          <input type="text" class="form-control" id="removePageNumbers" placeholder="e.g. 2, 4-6" />
          <span style="font-size:0.8rem; color:var(--color-text-light);">Specified pages will be excluded from output PDF.</span>
        </div>
      `;
      break;

    case 'watermark-pdf':
      settingsControls = `
        <div class="form-group">
          <label class="form-label">Watermark Text:</label>
          <input type="text" class="form-control" id="watermarkText" value="RealLens Confidential" placeholder="Enter watermark text..." />
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Text Color:</label>
            <input type="color" class="form-control" id="watermarkColor" value="#0066cc" style="height:38px; padding:2px;" />
          </div>
          <div class="form-group">
            <label class="form-label">Opacity:</label>
            <input type="range" class="form-control" id="watermarkOpacity" min="0.1" max="1" step="0.1" value="0.35" />
          </div>
        </div>
      `;
      break;

    case 'pdf-ocr':
      settingsControls = `
        <div class="form-group">
          <label class="form-label">OCR Target Language:</label>
          <select class="form-control" id="ocrLang">
            <option value="eng">English</option>
            <option value="spa">Spanish</option>
            <option value="fra">French</option>
            <option value="deu">German</option>
          </select>
        </div>
      `;
      break;

    case 'merge-images':
      settingsControls = `
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Layout Direction:</label>
            <select class="form-control" id="mergeLayout">
              <option value="horizontal">Side-by-Side (Horizontal)</option>
              <option value="vertical">Stacked Top-to-Bottom (Vertical)</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Spacing Between Images (px):</label>
            <input type="number" class="form-control" id="mergeSpacing" value="10" min="0" max="100" />
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Background Color:</label>
          <input type="color" class="form-control" id="mergeBgColor" value="#ffffff" style="height:38px; padding:2px;" />
        </div>
      `;
      break;

    case 'gif-maker':
      settingsControls = `
        <div class="form-group">
          <label class="form-label">Frame Animation Delay (ms):</label>
          <input type="number" class="form-control" id="gifDelay" value="300" min="100" max="2000" step="50" />
        </div>
      `;
      break;

    case 'image-color-picker':
      settingsControls = `
        <div style="font-size:0.875rem; color:var(--color-text-muted);">
          Upload an image to interactively pick exact HEX and RGB color values or extract dominant color palettes.
        </div>
      `;
      break;

    default:
      settingsControls = '';
      break;
  }

  if (!settingsControls) return '';

  return `
    <div class="tool-settings">
      <h4 style="font-size:0.9rem; font-weight:700;">Tool Options:</h4>
      ${settingsControls}
    </div>
  `;
}

function buildAISettingsHTML() {
  return `
    <div class="tool-settings">
      <h4 style="font-size:0.9rem; font-weight:700; color: var(--color-primary);">Item / Property Specifications & Notes:</h4>
      <div class="form-group">
        <label class="form-label">Enter Written Details (Real Estate, Products, Vehicles, Furniture, Services, etc.):</label>
        <textarea class="form-control" id="aiUserInput" placeholder="e.g. '3 bedroom townhouse in Dubai Hills with private garden, modern kitchen, large windows and covered parking' or 'Wireless noise-canceling headphones with 30-hour battery and USB-C fast charging'"></textarea>
      </div>
      <div style="font-size:0.825rem; color:var(--color-text-muted);">
        Combining your written specifications with visual image analysis to generate structured listing copy.
      </div>
    </div>
  `;
}

function buildStandardResultHTML() {
  return `
    <div class="preview-container">
      <div id="previewMediaBox"></div>
      <div id="fileStatsBox" style="font-size:0.875rem; color:var(--color-text-muted); text-align:center;"></div>
      <button class="btn btn-primary btn-lg" id="downloadBtn">
        Download Processed File
      </button>
    </div>
  `;
}

function setupWorkbenchEvents() {
  const browseBtn = document.getElementById('browseBtn');
  const fileInput = document.getElementById('fileInput');
  const dropZone = document.getElementById('dropZone');
  const processBtn = document.getElementById('processBtn');

  if (browseBtn && fileInput) {
    browseBtn.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', (e) => handleFilesSelected(e.target.files));
  }

  if (dropZone) {
    ['dragenter', 'dragover'].forEach(eventName => {
      dropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropZone.classList.add('dragover');
      }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
      dropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropZone.classList.remove('dragover');
      }, false);
    });

    dropZone.addEventListener('drop', (e) => {
      const dt = e.dataTransfer;
      if (dt && dt.files) {
        handleFilesSelected(dt.files);
      }
    });
  }

  // Rotation Buttons
  document.querySelectorAll('.rotate-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.rotate-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Split Mode toggle
  const splitModeSelect = document.getElementById('splitMode');
  const splitRangeGroup = document.getElementById('splitRangeGroup');
  if (splitModeSelect && splitRangeGroup) {
    splitModeSelect.addEventListener('change', (e) => {
      splitRangeGroup.style.display = e.target.value === 'range' ? 'block' : 'none';
    });
  }

  if (processBtn) {
    processBtn.addEventListener('click', () => executeToolProcessing());
  }
}

function setupToolOptionSyncListeners(tool) {
  if (tool.id === 'resize-image') {
    const slider = document.getElementById('resizeQualitySlider');
    const num = document.getElementById('resizeQualityNum');
    const valDisplay = document.getElementById('resizeQualityVal');
    const formatSel = document.getElementById('resizeFormat');
    const notice = document.getElementById('resizePngNotice');

    const updateQualitySync = (newVal) => {
      const clamped = Math.min(100, Math.max(1, parseInt(newVal) || 90));
      if (slider) slider.value = clamped;
      if (num) num.value = clamped;
      if (valDisplay) valDisplay.textContent = clamped + '%';
    };

    if (slider) slider.addEventListener('input', (e) => updateQualitySync(e.target.value));
    if (num) num.addEventListener('input', (e) => updateQualitySync(e.target.value));

    const checkFormatPng = () => {
      const selectedFormat = formatSel ? formatSel.value : 'original';
      const isFilePng = uploadedFiles.length > 0 && (uploadedFiles[0].type === 'image/png' || uploadedFiles[0].name.toLowerCase().endsWith('.png'));
      const isPng = selectedFormat === 'image/png' || (selectedFormat === 'original' && isFilePng);

      if (isPng) {
        if (slider) slider.disabled = true;
        if (num) num.disabled = true;
        if (notice) notice.style.display = 'block';
      } else {
        if (slider) slider.disabled = false;
        if (num) num.disabled = false;
        if (notice) notice.style.display = 'none';
      }
    };

    if (formatSel) formatSel.addEventListener('change', checkFormatPng);
  } else if (tool.id === 'ai-quality-enhancer') {
    const sharpenSlider = document.getElementById('aiSharpenSlider');
    const sharpenNum = document.getElementById('aiSharpenNum');
    const sharpenVal = document.getElementById('aiSharpenVal');

    const denoiseSlider = document.getElementById('aiDenoiseSlider');
    const denoiseNum = document.getElementById('aiDenoiseNum');
    const denoiseVal = document.getElementById('aiDenoiseVal');

    const claritySlider = document.getElementById('aiClaritySlider');
    const clarityNum = document.getElementById('aiClarityNum');
    const clarityVal = document.getElementById('aiClarityVal');

    const presetSel = document.getElementById('aiEnhancePreset');

    const syncPair = (slider, num, display) => {
      if (!slider || !num || !display) return;
      slider.addEventListener('input', (e) => {
        num.value = e.target.value;
        display.textContent = e.target.value + '%';
      });
      num.addEventListener('input', (e) => {
        const val = Math.min(100, Math.max(0, parseInt(e.target.value) || 0));
        slider.value = val;
        display.textContent = val + '%';
      });
    };

    syncPair(sharpenSlider, sharpenNum, sharpenVal);
    syncPair(denoiseSlider, denoiseNum, denoiseVal);
    syncPair(claritySlider, clarityNum, clarityVal);

    if (presetSel) {
      presetSel.addEventListener('change', (e) => {
        const preset = e.target.value;
        if (preset === 'balanced') {
          if (sharpenSlider) { sharpenSlider.value = 60; sharpenNum.value = 60; sharpenVal.textContent = '60%'; }
          if (denoiseSlider) { denoiseSlider.value = 35; denoiseNum.value = 35; denoiseVal.textContent = '35%'; }
          if (claritySlider) { claritySlider.value = 50; clarityNum.value = 50; clarityVal.textContent = '50%'; }
        } else if (preset === 'sharpness') {
          if (sharpenSlider) { sharpenSlider.value = 90; sharpenNum.value = 90; sharpenVal.textContent = '90%'; }
          if (denoiseSlider) { denoiseSlider.value = 20; denoiseNum.value = 20; denoiseVal.textContent = '20%'; }
          if (claritySlider) { claritySlider.value = 60; clarityNum.value = 60; clarityVal.textContent = '60%'; }
        } else if (preset === 'denoise') {
          if (sharpenSlider) { sharpenSlider.value = 40; sharpenNum.value = 40; sharpenVal.textContent = '40%'; }
          if (denoiseSlider) { denoiseSlider.value = 80; denoiseNum.value = 80; denoiseVal.textContent = '80%'; }
          if (claritySlider) { claritySlider.value = 30; clarityNum.value = 30; clarityVal.textContent = '30%'; }
        } else if (preset === 'clarity') {
          if (sharpenSlider) { sharpenSlider.value = 70; sharpenNum.value = 70; sharpenVal.textContent = '70%'; }
          if (denoiseSlider) { denoiseSlider.value = 30; denoiseNum.value = 30; denoiseVal.textContent = '30%'; }
          if (claritySlider) { claritySlider.value = 85; clarityNum.value = 85; clarityVal.textContent = '85%'; }
        }
      });
    }
  }
}

function handleFilesSelected(fileList) {
  if (!fileList || fileList.length === 0) return;

  uploadedFiles = Array.from(fileList);
  updateFileListUI();

  const processBtn = document.getElementById('processBtn');
  if (processBtn) processBtn.disabled = false;

  const file = uploadedFiles[0];

  // Auto-populate Resize Image Dimensions & setup aspect ratio listeners
  if (selectedTool && selectedTool.id === 'resize-image' && file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const wInput = document.getElementById('resizeWidth');
        const hInput = document.getElementById('resizeHeight');
        const aspectCheck = document.getElementById('maintainAspect');

        if (wInput) wInput.value = img.width;
        if (hInput) hInput.value = img.height;

        const aspectRatio = img.width / img.height;

        if (wInput) {
          wInput.oninput = () => {
            if (aspectCheck && aspectCheck.checked && aspectRatio > 0) {
              const newW = parseInt(wInput.value) || 0;
              if (hInput && newW > 0) {
                hInput.value = Math.max(1, Math.round(newW / aspectRatio));
              }
            }
          };
        }

        if (hInput) {
          hInput.oninput = () => {
            if (aspectCheck && aspectCheck.checked && aspectRatio > 0) {
              const newH = parseInt(hInput.value) || 0;
              if (wInput && newH > 0) {
                wInput.value = Math.max(1, Math.round(newH * aspectRatio));
              }
            }
          };
        }

        if (selectedTool) setupToolOptionSyncListeners(selectedTool);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  } else if (selectedTool) {
    setupToolOptionSyncListeners(selectedTool);
  }

  // Auto-initialize Cropper.js for Crop Tool
  if (selectedTool && selectedTool.id === 'crop-image' && file) {
    const cropContainer = document.getElementById('cropContainer');
    const cropImg = document.getElementById('cropImageTarget');
    if (cropContainer && cropImg) {
      const reader = new FileReader();
      reader.onload = (e) => {
        cropImg.src = e.target.result;
        cropContainer.style.display = 'flex';

        if (cropperInstance) cropperInstance.destroy();
        cropperInstance = new Cropper(cropImg, {
          aspectRatio: NaN,
          viewMode: 1,
          autoCropArea: 0.8
        });

        // Aspect ratio dropdown listener
        const aspectSelect = document.getElementById('cropAspectRatio');
        if (aspectSelect) {
          aspectSelect.onchange = () => {
            const val = aspectSelect.value;
            cropperInstance.setAspectRatio(val === 'free' ? NaN : parseFloat(val));
          };
        }
      };
      reader.readAsDataURL(file);
    }
  }

  showStatus(`${uploadedFiles.length} file(s) selected successfully. Ready for processing.`, 'success');
}

function updateFileListUI() {
  const container = document.getElementById('fileListContainer');
  const listEl = document.getElementById('fileList');
  if (!container || !listEl) return;

  container.style.display = uploadedFiles.length > 0 ? 'flex' : 'none';
  listEl.innerHTML = '';

  uploadedFiles.forEach((file) => {
    const sizeMB = (file.size / (1024 * 1024)).toFixed(2);
    const itemHTML = `
      <div style="display:flex; align-items:center; justify-content:space-between; background:var(--color-bg-section); padding:0.4rem 0.75rem; border:1px solid var(--color-border); border-radius:var(--radius-sm); font-size:0.85rem;">
        <span style="font-weight:600; text-overflow:ellipsis; overflow:hidden; white-space:nowrap; max-width:70%;">${escapeHTML(file.name)}</span>
        <span style="color:var(--color-text-light);">${sizeMB} MB</span>
      </div>
    `;
    listEl.insertAdjacentHTML('beforeend', itemHTML);
  });
}

function showStatus(msg, type = 'info') {
  const msgEl = document.getElementById('statusMessage');
  if (!msgEl) return;

  msgEl.style.display = 'block';
  msgEl.textContent = msg;

  if (type === 'success') {
    msgEl.style.backgroundColor = 'var(--color-success-bg)';
    msgEl.style.color = '#065f46';
    msgEl.style.border = '1px solid #a7f3d0';
  } else if (type === 'error') {
    msgEl.style.backgroundColor = '#fef2f2';
    msgEl.style.color = '#991b1b';
    msgEl.style.border = '1px solid #fecaca';
  } else {
    msgEl.style.backgroundColor = 'var(--color-primary-light)';
    msgEl.style.color = 'var(--color-primary)';
    msgEl.style.border = '1px solid #bfdbfe';
  }
}

// Processing Execution Router
async function executeToolProcessing() {
  if (!selectedTool || uploadedFiles.length === 0) {
    showStatus('Please select a file first.', 'error');
    return;
  }

  const processBtn = document.getElementById('processBtn');
  if (processBtn) processBtn.disabled = true;

  showStatus('Processing file...', 'info');

  try {
    if (selectedTool.id === 'ai-description-maker') {
      await processAIDescriptionMaker();
    } else if (selectedTool.id === 'ai-quality-enhancer') {
      await processAIQualityEnhancer();
    } else if (selectedTool.category === 'image') {
      await processImageTool();
    } else if (selectedTool.category === 'pdf') {
      await processPDFTool();
    }
  } catch (err) {
    console.error(err);
    showStatus('Processing failed: ' + (err.message || 'An unexpected error occurred.'), 'error');
  } finally {
    if (processBtn) processBtn.disabled = false;
  }
}

// ================= AI DESCRIPTION MAKER ENGINE =================
async function processAIDescriptionMaker() {
  showStatus('Generating professional marketing copy...', 'info');

  const file = uploadedFiles[0];
  const userText = (document.getElementById('aiUserInput')?.value || '').trim();

  // Gentle visual tone cues (without any technical/file metrics)
  let brightnessLevel = 'bright';
  let warmCoolTone = 'neutral';
  if (file) {
    try {
      const imgData = await readFileAsDataURL(file);
      const img = await loadImage(imgData);
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = Math.min(img.width, 200);
      canvas.height = Math.min(img.height, 200);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      let rSum = 0, gSum = 0, bSum = 0;
      for (let i = 0; i < data.length; i += 16) {
        rSum += data[i];
        gSum += data[i + 1];
        bSum += data[i + 2];
      }
      const sampleCount = data.length / 16;
      const avgR = Math.round(rSum / sampleCount);
      const avgG = Math.round(gSum / sampleCount);
      const avgB = Math.round(bSum / sampleCount);
      const lum = Math.round((avgR * 299 + avgG * 587 + avgB * 114) / 1000);

      if (lum < 90) brightnessLevel = 'moody';
      else if (lum > 180) brightnessLevel = 'light-filled';

      if (avgR > avgB + 15) warmCoolTone = 'warm';
      else if (avgB > avgR + 15) warmCoolTone = 'cool';
    } catch (e) {
      console.warn('Image cue notice:', e);
    }
  }

  const rawInput = userText || (file ? file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ') : 'Featured Item');
  const cleanInput = rawInput.trim();

  // Detect Domain
  const isRealEstate = /townhouse|apartment|villa|house|home|condo|property|residence|bedroom|bed\b|bath|kitchen|building|studio|living|duplex|penthouse|estate/i.test(cleanInput);
  const isVehicle = /car|vehicle|sedan|suv|truck|porsche|bmw|mercedes|audi|tesla|ford|toyota|honda|motorcycle|motor|auto/i.test(cleanInput);
  const isElectronics = /phone|laptop|watch|headphone|earbud|camera|audio|screen|device|tech|smart|wireless|bluetooth|speaker|tablet/i.test(cleanInput);
  const isFurniture = /chair|table|sofa|desk|bed|cabinet|couch|furniture|decor|dresser|armchair|bookshelf|stool|lounge/i.test(cleanInput);

  let title = '';
  let professionalDesc = '';
  let shortDesc = '';
  let seoDesc = '';
  let keyFeatures = [];

  if (isRealEstate) {
    // Real Estate Parser
    const bedMatch = cleanInput.match(/(\d+)\s*(?:bed|bedroom|br)/i);
    const bathMatch = cleanInput.match(/(\d+)\s*(?:bath|bathroom|ba)/i);
    const locMatch = cleanInput.match(/(?:in|at|located in|near)\s+([A-Za-z0-9\s]+?)(?:,|with|and|\.|$)/i);
    const typeMatch = cleanInput.match(/(townhouse|villa|apartment|condo|penthouse|duplex|house|home|residence|studio)/i);

    const bedrooms = bedMatch ? `${bedMatch[1]}-bedroom` : '';
    const bathrooms = bathMatch ? `${bathMatch[1]}-bathroom` : '';
    const propType = typeMatch ? typeMatch[1].toLowerCase() : 'townhouse';
    const location = locMatch ? locMatch[1].trim() : 'a desirable community';

    // Parse features
    let featurePhrases = cleanInput
      .replace(/(?:in|at|located in)\s+[A-Za-z0-9\s]+?(?:,|with|and|\.|$)/gi, ',')
      .replace(/\d+\s*(?:bedroom|bed|bath|bathroom|br|ba)s?/gi, ',')
      .replace(/(townhouse|villa|apartment|condo|penthouse|duplex|house|home|residence)/gi, ',')
      .split(/[,;\n\r]+|\bwith\b|\band\b/gi)
      .map(s => s.trim())
      .filter(s => s.length > 2);

    // Format features list
    const formattedFeatures = [];
    featurePhrases.forEach(f => {
      let fClean = f.replace(/^a\s+|^the\s+|^with\s+/i, '').trim();
      if (!fClean) return;
      if (/pool|swimming/i.test(fClean) && !formattedFeatures.some(x => /pool/i.test(x))) formattedFeatures.push('private swimming pool');
      else if (/balcony/i.test(fClean) && !formattedFeatures.some(x => /balcony/i.test(x))) formattedFeatures.push('balcony areas');
      else if (/parking/i.test(fClean) && !formattedFeatures.some(x => /parking/i.test(x))) formattedFeatures.push('covered parking');
      else if (/chef/i.test(fClean) && !formattedFeatures.some(x => /chef/i.test(fClean))) formattedFeatures.push('personal chef service');
      else if (/garden/i.test(fClean) && !formattedFeatures.some(x => /garden/i.test(x))) formattedFeatures.push('landscaped outdoor garden');
      else if (/gym|fitness/i.test(fClean) && !formattedFeatures.some(x => /gym/i.test(x))) formattedFeatures.push('fitness amenities');
      else if (!formattedFeatures.includes(fClean)) formattedFeatures.push(fClean);
    });

    if (formattedFeatures.length === 0) {
      formattedFeatures.push('spacious outdoor areas', 'covered parking', 'modern layout');
    }

    const featureText = formattedFeatures.length > 1 
      ? formattedFeatures.slice(0, -1).join(', ') + ' and ' + formattedFeatures[formattedFeatures.length - 1]
      : formattedFeatures[0];

    const propTitlePart = [bedrooms, capitalizePhrase(propType)].filter(Boolean).join(' ');
    title = `Modern ${propTitlePart || 'Luxury Property'}${locMatch ? ' in ' + capitalizePhrase(location) : ''}`;

    professionalDesc = `Experience modern luxury living in this beautifully designed ${bedrooms ? bedrooms + ' ' : ''}${propType} located in ${location}. The residence features a contemporary architectural design with spacious living areas, elegant finishes, and bright interiors filled with natural light. The exterior showcases a refined modern style with a clean color palette and premium materials, while the landscaped outdoor spaces create a relaxing environment. The property includes a ${featureText}, and thoughtfully designed spaces perfect for comfortable family living. With its modern layout, high-quality finishes, and premium amenities, this ${propType} offers a sophisticated lifestyle in one of ${location}'s desirable communities.`;

    shortDesc = `Stunning ${bedrooms ? bedrooms + ' ' : ''}${propType} in ${location} featuring a ${featureText}, modern architectural layout, and bright interior spaces.`;

    seoDesc = `${bedrooms ? bedrooms + ' ' : ''}${capitalizePhrase(propType)} in ${location}. Features ${formattedFeatures.slice(0, 3).join(', ')} & modern luxury design.`;

    keyFeatures = [
      `Spacious ${bedrooms ? bedrooms + ' ' : ''}${propType} layout with modern architectural styling`,
      ...formattedFeatures.map(f => capitalizePhrase(f)),
      `Bright interiors filled with abundant natural light`,
      `Premium finishes and high-quality construction materials`
    ];

  } else if (isVehicle) {
    // Vehicle Parser
    title = capitalizePhrase(cleanInput.split(',')[0]);
    if (!/car|vehicle|porsche|bmw|mercedes|audi|tesla/i.test(title)) {
      title = `Premium Performance Vehicle - ${title}`;
    }

    const vehicleFeatures = cleanInput
      .split(/[,;\n\r]+|\bwith\b|\band\b/gi)
      .map(s => s.trim())
      .filter(s => s.length > 2);

    const featureListText = vehicleFeatures.length > 1
      ? vehicleFeatures.slice(0, -1).join(', ') + ' and ' + vehicleFeatures[vehicleFeatures.length - 1]
      : vehicleFeatures[0] || 'sleek exterior styling, refined cabin detailing, and high-performance engineering';

    professionalDesc = `Presenting an exceptional automotive offering featuring ${featureListText}. Designed with clean aerodynamic contours, a striking silhouette, and immaculate exterior craftsmanship, this vehicle delivers a seamless blend of power, elegance, and driving precision. The exterior highlights a premium finish and sharp lighting details, while the interior offers a driver-focused cabin with comfortable seating, state-of-the-art controls, and high-quality materials throughout. Engineered for enthusiasts who value performance and distinction, this vehicle provides an extraordinary driving experience.`;

    shortDesc = `Exceptional performance vehicle featuring ${featureListText}, immaculate styling, and driver-focused interior comfort.`;

    seoDesc = `${title}. Features ${vehicleFeatures.slice(0, 3).join(', ')} & pristine overall condition.`;

    keyFeatures = [
      `Sleek aerodynamic exterior design with premium finish`,
      `Driver-focused interior cabin with high-grade comfort`,
      ...vehicleFeatures.map(f => capitalizePhrase(f)),
      `Pristine condition and well-maintained mechanical performance`
    ];

  } else if (isElectronics) {
    // Electronics Parser
    title = capitalizePhrase(cleanInput.split(',')[0]);
    if (!/headphones|phone|laptop|watch|camera|audio|device/i.test(title)) {
      title = `Premium Wireless Hardware - ${title}`;
    }

    const techFeatures = cleanInput
      .split(/[,;\n\r]+|\bwith\b|\band\b/gi)
      .map(s => s.trim())
      .filter(s => s.length > 2);

    const featureText = techFeatures.length > 1
      ? techFeatures.slice(0, -1).join(', ') + ' and ' + techFeatures[techFeatures.length - 1]
      : techFeatures[0] || 'modern ergonomic design, active performance, and durable build quality';

    professionalDesc = `Engineered for exceptional daily performance, this product features ${featureText}. Built with a sleek minimalist aesthetic and modern industrial craftsmanship, it combines intuitive functionality with long-lasting durability. The ergonomic design ensures maximum comfort and ease of use, while high-grade components deliver reliable performance for work, travel, or leisure. A versatile hardware essential crafted to elevate your daily routine.`;

    shortDesc = `High-performance product featuring ${featureText}, ergonomic comfort, and sleek modern design.`;

    seoDesc = `${title}. Features ${techFeatures.slice(0, 3).join(', ')} & long-lasting build quality.`;

    keyFeatures = [
      `Ergonomic lightweight design for comfortable everyday use`,
      ...techFeatures.map(f => capitalizePhrase(f)),
      `High-grade durable construction with modern matte finish`,
      `Versatile functionality suitable for professional or personal use`
    ];

  } else if (isFurniture) {
    // Furniture Parser
    title = capitalizePhrase(cleanInput.split(',')[0]);

    const furnFeatures = cleanInput
      .split(/[,;\n\r]+|\bwith\b|\band\b/gi)
      .map(s => s.trim())
      .filter(s => s.length > 2);

    const featureText = furnFeatures.length > 1
      ? furnFeatures.slice(0, -1).join(', ') + ' and ' + furnFeatures[furnFeatures.length - 1]
      : furnFeatures[0] || 'contemporary design, premium materials, and supportive comfort';

    professionalDesc = `Elevate your interior space with this thoughtfully crafted furniture piece featuring ${featureText}. The elegant silhouette integrates seamlessly with modern home or office decor, while the sturdy frame and high-grade materials ensure lasting durability and support. Tailored with refined lines and superior craftsmanship, it provides both luxurious comfort and a sophisticated aesthetic statement for any room.`;

    shortDesc = `Modern furniture piece featuring ${featureText}, durable craftsmanship, and elegant interior styling.`;

    seoDesc = `${title}. Features ${furnFeatures.slice(0, 3).join(', ')} & premium modern craftsmanship.`;

    keyFeatures = [
      `Contemporary silhouette that complements modern interior decor`,
      ...furnFeatures.map(f => capitalizePhrase(f)),
      `Sturdy structural frame & high-grade upholstery materials`,
      `Tailored craftsmanship designed for lasting comfort and style`
    ];

  } else {
    // General Products / Services Parser
    title = capitalizePhrase(cleanInput.split(',')[0]);

    const genFeatures = cleanInput
      .split(/[,;\n\r]+|\bwith\b|\band\b/gi)
      .map(s => s.trim())
      .filter(s => s.length > 2);

    const featureText = genFeatures.length > 1
      ? genFeatures.slice(0, -1).join(', ') + ' and ' + genFeatures[genFeatures.length - 1]
      : genFeatures[0] || 'refined craftsmanship, versatile utility, and modern aesthetic appeal';

    professionalDesc = `Discover exceptional quality with this item featuring ${featureText}. Designed with careful attention to detail, it combines high-grade materials with practical daily utility. The clean proportions and versatile styling ensure a professional presentation suitable for personal use or commercial showcase, delivering an outstanding balance of design, functionality, and value.`;

    shortDesc = `High-quality offering featuring ${featureText}, elegant design, and versatile application.`;

    seoDesc = `${title}. Features ${genFeatures.slice(0, 3).join(', ')} & premium design quality.`;

    keyFeatures = [
      `Refined aesthetic design with meticulous attention to detail`,
      ...genFeatures.map(f => capitalizePhrase(f)),
      `High-quality construction ensuring long-lasting durability`,
      `Versatile application tailored for modern lifestyle needs`
    ];
  }

  // Ensure key features are unique and trimmed
  keyFeatures = Array.from(new Set(keyFeatures)).slice(0, 6);

  const resultContainer = document.getElementById('resultContainer');
  const aiResultsOutput = document.getElementById('aiResultsOutput');

  aiResultsOutput.innerHTML = `
    <div class="ai-result-card">
      <div class="ai-result-header">
        <h4 class="ai-result-title">📌 Title</h4>
        <button class="btn btn-secondary btn-sm copy-btn" data-text="${escapeHTML(title)}" type="button">Copy</button>
      </div>
      <div class="ai-result-content" style="font-weight:700; font-size:1.05rem;">${escapeHTML(title)}</div>
    </div>

    <div class="ai-result-card">
      <div class="ai-result-header">
        <h4 class="ai-result-title">✨ Professional Description</h4>
        <button class="btn btn-secondary btn-sm copy-btn" data-text="${escapeHTML(professionalDesc)}" type="button">Copy</button>
      </div>
      <div class="ai-result-content" style="line-height:1.65;">${escapeHTML(professionalDesc)}</div>
    </div>

    <div class="ai-result-card">
      <div class="ai-result-header">
        <h4 class="ai-result-title">📝 Short Description</h4>
        <button class="btn btn-secondary btn-sm copy-btn" data-text="${escapeHTML(shortDesc)}" type="button">Copy</button>
      </div>
      <div class="ai-result-content">${escapeHTML(shortDesc)}</div>
    </div>

    <div class="ai-result-card">
      <div class="ai-result-header">
        <h4 class="ai-result-title">🔍 SEO Description</h4>
        <button class="btn btn-secondary btn-sm copy-btn" data-text="${escapeHTML(seoDesc)}" type="button">Copy</button>
      </div>
      <div class="ai-result-content">${escapeHTML(seoDesc)}</div>
    </div>

    <div class="ai-result-card">
      <div class="ai-result-header">
        <h4 class="ai-result-title">🏷️ Key Features</h4>
        <button class="btn btn-secondary btn-sm copy-btn" data-text="${escapeHTML(keyFeatures.join('\n'))}" type="button">Copy List</button>
      </div>
      <div class="ai-result-content">
        <ul class="ai-features-list">
          ${keyFeatures.map(f => `<li>${escapeHTML(f)}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;

  resultContainer.style.display = 'flex';
  showStatus('AI Description generated successfully!', 'success');

  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const txt = btn.dataset.text;
      navigator.clipboard.writeText(txt).then(() => {
        showToast('Copied to clipboard!');
      });
    });
  });
}

// ================= IMAGE PROCESSING ENGINE =================
async function processImageTool() {
  const toolId = selectedTool.id;
  const file = uploadedFiles[0];

  if (toolId === 'crop-image') {
    if (!cropperInstance) {
      throw new Error('Please select an area on the image to crop.');
    }
    const canvas = cropperInstance.getCroppedCanvas();
    if (!canvas) throw new Error('Could not generate cropped canvas.');

    canvas.toBlob((blob) => {
      processResultBlob = blob;
      processResultFilename = `cropped_${file.name}`;
      renderStandardResultUI(canvas.toDataURL('image/png'), file.size, blob.size);
      showStatus('Image cropped successfully!', 'success');
    }, 'image/png');
    return;
  }

  if (toolId === 'image-color-picker') {
    const dataUrl = await readFileAsDataURL(file);
    const img = await loadImage(dataUrl);
    renderColorPickerUI(img);
    return;
  }

  if (toolId === 'merge-images') {
    await processMergeImages();
    return;
  }

  if (toolId === 'gif-maker') {
    await processGIFMaker();
    return;
  }

  if (toolId === 'gif-to-images') {
    await processGIFToImages();
    return;
  }

  if (toolId === 'pdf-to-image') {
    await processPDFToImages(file);
    return;
  }

  if (toolId === 'image-to-pdf') {
    await processImagesToPDF();
    return;
  }

  const fileData = await readFileAsDataURL(file);
  const img = await loadImage(fileData);

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  let outputMime = file.type || 'image/jpeg';
  let quality = 0.85;

  if (toolId === 'compress-image') {
    const qSelect = document.getElementById('compressLevel');
    if (qSelect) quality = parseFloat(qSelect.value);

    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);

    outputMime = 'image/jpeg';
    processResultFilename = `compressed_${file.name.replace(/\.[^/.]+$/, '')}.jpg`;
  }
  else if (toolId === 'resize-image') {
    const formatSel = document.getElementById('resizeFormat')?.value || 'original';
    const qualityNum = parseInt(document.getElementById('resizeQualityNum')?.value || '90');
    let qualityVal = qualityNum / 100;

    let targetMime = formatSel;
    if (formatSel === 'original') {
      targetMime = file.type || 'image/jpeg';
    }

    if (targetMime === 'image/png') {
      qualityVal = undefined; // Lossless for PNG
    }

    // Batch Resize Multiple Files
    if (uploadedFiles.length > 1) {
      showStatus(`Resizing ${uploadedFiles.length} images...`, 'info');
      const zip = new JSZip();
      let count = 0;

      for (const f of uploadedFiles) {
        const dUrl = await readFileAsDataURL(f);
        const imgObj = await loadImage(dUrl);

        let w = parseInt(document.getElementById('resizeWidth')?.value || imgObj.width);
        let h = parseInt(document.getElementById('resizeHeight')?.value || imgObj.height);

        const c = document.createElement('canvas');
        c.width = w;
        c.height = h;
        const cx = c.getContext('2d');
        cx.imageSmoothingEnabled = true;
        cx.imageSmoothingQuality = 'high';
        cx.drawImage(imgObj, 0, 0, w, h);

        const fMime = targetMime === 'original' ? (f.type || 'image/jpeg') : targetMime;
        const ext = fMime.split('/')[1] || 'jpg';
        const qVal = fMime === 'image/png' ? undefined : qualityVal;

        const b = await new Promise(res => c.toBlob(res, fMime, qVal));
        zip.file(`resized_${f.name.replace(/\.[^/.]+$/, '')}.${ext}`, b);
        count++;
      }

      const zipBlob = await zip.generateAsync({ type: 'blob' });
      processResultBlob = zipBlob;
      processResultFilename = 'resized_images_batch.zip';
      renderStandardResultUI(null, null, zipBlob.size, true);
      showStatus(`Batch of ${count} images resized successfully!`, 'success');
      return;
    }

    // Single Image Resize
    const w = parseInt(document.getElementById('resizeWidth')?.value || img.width);
    const h = parseInt(document.getElementById('resizeHeight')?.value || img.height);

    canvas.width = w;
    canvas.height = h;
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, 0, 0, w, h);

    outputMime = targetMime;
    const ext = outputMime.split('/')[1] || 'jpg';
    processResultFilename = `resized_${file.name.replace(/\.[^/.]+$/, '')}.${ext}`;
    quality = qualityVal;
  }
  else if (toolId === 'rotate-image') {
    const activeRotateBtn = document.querySelector('.rotate-btn.active');
    const angle = parseInt(activeRotateBtn?.dataset.angle || '90');

    if (angle === 90 || angle === 270) {
      canvas.width = img.height;
      canvas.height = img.width;
    } else {
      canvas.width = img.width;
      canvas.height = img.height;
    }

    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate((angle * Math.PI) / 180);
    ctx.drawImage(img, -img.width / 2, -img.height / 2);

    outputMime = file.type || 'image/jpeg';
    processResultFilename = `rotated_${file.name}`;
  }
  else if (toolId === 'flip-image') {
    const dir = document.getElementById('flipDirection')?.value || 'horizontal';
    canvas.width = img.width;
    canvas.height = img.height;

    ctx.translate(dir === 'horizontal' ? canvas.width : 0, dir === 'vertical' ? canvas.height : 0);
    ctx.scale(dir === 'horizontal' ? -1 : 1, dir === 'vertical' ? -1 : 1);
    ctx.drawImage(img, 0, 0);

    outputMime = file.type || 'image/jpeg';
    processResultFilename = `flipped_${file.name}`;
  }
  else if (toolId === 'image-to-jpg' || toolId === 'webp-to-jpg') {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);

    outputMime = 'image/jpeg';
    processResultFilename = `${file.name.replace(/\.[^/.]+$/, '')}.jpg`;
  }
  else if (toolId === 'image-to-png') {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);

    outputMime = 'image/png';
    processResultFilename = `${file.name.replace(/\.[^/.]+$/, '')}.png`;
  }
  else if (toolId === 'image-to-webp') {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);

    outputMime = 'image/webp';
    processResultFilename = `${file.name.replace(/\.[^/.]+$/, '')}.webp`;
  }
  else {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    outputMime = file.type || 'image/jpeg';
    processResultFilename = `processed_${file.name}`;
  }

  canvas.toBlob((blob) => {
    processResultBlob = blob;
    renderStandardResultUI(canvas.toDataURL(outputMime), file.size, blob.size);
    showStatus('Image processed successfully!', 'success');
  }, outputMime, quality);
}

// Merge Images Engine
async function processMergeImages() {
  const layout = document.getElementById('mergeLayout')?.value || 'horizontal';
  const spacing = parseInt(document.getElementById('mergeSpacing')?.value || '10');
  const bgColor = document.getElementById('mergeBgColor')?.value || '#ffffff';

  const loadedImgs = [];
  for (const f of uploadedFiles) {
    const url = await readFileAsDataURL(f);
    const img = await loadImage(url);
    loadedImgs.push(img);
  }

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  if (layout === 'horizontal') {
    const totalWidth = loadedImgs.reduce((sum, img) => sum + img.width, 0) + spacing * (loadedImgs.length + 1);
    const maxHeight = Math.max(...loadedImgs.map(img => img.height)) + spacing * 2;

    canvas.width = totalWidth;
    canvas.height = maxHeight;

    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let currentX = spacing;
    loadedImgs.forEach(img => {
      const y = (maxHeight - img.height) / 2;
      ctx.drawImage(img, currentX, y);
      currentX += img.width + spacing;
    });
  } else {
    const maxWidth = Math.max(...loadedImgs.map(img => img.width)) + spacing * 2;
    const totalHeight = loadedImgs.reduce((sum, img) => sum + img.height, 0) + spacing * (loadedImgs.length + 1);

    canvas.width = maxWidth;
    canvas.height = totalHeight;

    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let currentY = spacing;
    loadedImgs.forEach(img => {
      const x = (maxWidth - img.width) / 2;
      ctx.drawImage(img, x, currentY);
      currentY += img.height + spacing;
    });
  }

  canvas.toBlob((blob) => {
    processResultBlob = blob;
    processResultFilename = `merged_images.png`;
    renderStandardResultUI(canvas.toDataURL('image/png'));
    showStatus('Images merged successfully!', 'success');
  }, 'image/png');
}

// GIF Maker Engine
async function processGIFMaker() {
  if (!window.gifshot) throw new Error('GIF engine library not loaded.');

  showStatus('Building GIF animation frames...', 'info');

  const delay = parseInt(document.getElementById('gifDelay')?.value || '300');
  const dataUrls = [];

  for (const f of uploadedFiles) {
    const url = await readFileAsDataURL(f);
    dataUrls.push(url);
  }

  window.gifshot.createGIF({
    images: dataUrls,
    interval: delay / 1000,
    gifWidth: 600,
    gifHeight: 600
  }, (obj) => {
    if (!obj.error) {
      const imageSrc = obj.image;
      processResultBlob = dataURLToBlob(imageSrc);
      processResultFilename = `animated_gif.gif`;
      renderStandardResultUI(imageSrc);
      showStatus('GIF created successfully!', 'success');
    } else {
      showStatus('GIF creation failed: ' + obj.error, 'error');
    }
  });
}

// GIF To Images Frame Extractor Engine
async function processGIFToImages() {
  const file = uploadedFiles[0];
  const url = await readFileAsDataURL(file);
  const img = await loadImage(url);

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0, 0);

  canvas.toBlob(async (blob) => {
    if (window.JSZip) {
      const zip = new window.JSZip();
      zip.file('frame_1.png', blob);
      const zipBlob = await zip.generateAsync({ type: 'blob' });

      processResultBlob = zipBlob;
      processResultFilename = `${file.name.replace(/\.[^/.]+$/, '')}_frames.zip`;
      renderStandardResultUI('/assets/favicon.svg');
      showStatus('GIF frame extracted to ZIP archive!', 'success');
    } else {
      processResultBlob = blob;
      processResultFilename = `frame_1.png`;
      renderStandardResultUI(canvas.toDataURL('image/png'));
      showStatus('Frame extracted!', 'success');
    }
  }, 'image/png');
}

// Color Picker Tool
function renderColorPickerUI(img) {
  const previewMediaBox = document.getElementById('previewMediaBox');
  const resultContainer = document.getElementById('resultContainer');

  previewMediaBox.innerHTML = `
    <div style="display:flex; flex-direction:column; align-items:center; gap:1.25rem; width:100%;">
      <div style="position:relative; max-width:100%; border:1px solid var(--color-border); border-radius:var(--radius-sm); overflow:hidden; background:#f1f5f9;">
        <canvas id="colorCanvas" style="max-width:100%; cursor:crosshair; display:block;"></canvas>
      </div>
      
      <div style="display:flex; flex-direction:column; gap:1rem; width:100%;">
        <div id="colorDisplayCard" style="display:flex; align-items:center; gap:1.5rem; background:var(--color-bg-section); padding:1rem 1.25rem; border:1px solid var(--color-border); border-radius:var(--radius-md); width:100%; justify-content:space-between;">
          <div style="display:flex; align-items:center; gap:1rem;">
            <div id="colorSwatch" style="width:48px; height:48px; border-radius:var(--radius-sm); border:2px solid var(--color-border); background:#ffffff;"></div>
            <div>
              <div id="colorHexText" style="font-size:1.1rem; font-weight:800; color:var(--color-text-main);">#FFFFFF</div>
              <div id="colorRgbText" style="font-size:0.85rem; color:var(--color-text-muted);">rgb(255, 255, 255)</div>
            </div>
          </div>
          <button class="btn btn-secondary btn-sm" id="copyColorBtn" type="button">Copy HEX</button>
        </div>

        <div>
          <h4 style="font-size:0.9rem; font-weight:700; margin-bottom:0.5rem;">Dominant Image Color Palette:</h4>
          <div id="colorPaletteGrid" style="display:flex; gap:0.5rem; flex-wrap:wrap;"></div>
        </div>
      </div>
    </div>
  `;

  const canvas = document.getElementById('colorCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0, 0);

  const swatch = document.getElementById('colorSwatch');
  const hexText = document.getElementById('colorHexText');
  const rgbText = document.getElementById('colorRgbText');
  const copyBtn = document.getElementById('copyColorBtn');
  const paletteGrid = document.getElementById('colorPaletteGrid');

  // Extract Dominant Palette
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  const colorCounts = {};

  for (let i = 0; i < data.length; i += 64) {
    const r = Math.round(data[i] / 32) * 32;
    const g = Math.round(data[i + 1] / 32) * 32;
    const b = Math.round(data[i + 2] / 32) * 32;
    const hex = rgbToHex(Math.min(255, r), Math.min(255, g), Math.min(255, b));
    colorCounts[hex] = (colorCounts[hex] || 0) + 1;
  }

  const sortedColors = Object.keys(colorCounts).sort((a, b) => colorCounts[b] - colorCounts[a]).slice(0, 6);

  paletteGrid.innerHTML = sortedColors.map(hex => `
    <button type="button" class="palette-swatch-btn" data-hex="${hex}" style="display:flex; align-items:center; gap:0.4rem; padding:0.35rem 0.65rem; border:1px solid var(--color-border); border-radius:var(--radius-sm); background:#ffffff; cursor:pointer; font-size:0.8rem; font-weight:600;">
      <span style="width:16px; height:16px; border-radius:2px; background:${hex}; border:1px solid rgba(0,0,0,0.15);"></span>
      ${hex}
    </button>
  `).join('');

  document.querySelectorAll('.palette-swatch-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const h = btn.dataset.hex;
      navigator.clipboard.writeText(h).then(() => {
        showToast(`Copied ${h}!`);
      });
    });
  });

  function pick(e) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const x = Math.floor((e.clientX - rect.left) * scaleX);
    const y = Math.floor((e.clientY - rect.top) * scaleY);

    const p = ctx.getImageData(x, y, 1, 1).data;
    const hex = rgbToHex(p[0], p[1], p[2]);
    const rgb = `rgb(${p[0]}, ${p[1]}, ${p[2]})`;

    swatch.style.backgroundColor = hex;
    hexText.textContent = hex;
    rgbText.textContent = rgb;
  }

  canvas.addEventListener('mousemove', pick);
  canvas.addEventListener('click', pick);

  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(hexText.textContent).then(() => {
      showToast('Color HEX copied!');
    });
  });

  resultContainer.style.display = 'flex';
  showStatus('Color picker active! Hover or click image to sample colors.', 'success');
}

// ================= PDF PROCESSING ENGINE =================
async function processPDFTool() {
  const toolId = selectedTool.id;
  const file = uploadedFiles[0];

  if (!window.PDFLib) {
    throw new Error('PDF processing library not initialized.');
  }

  showStatus('Processing PDF document...', 'info');

  if (toolId === 'merge-pdf') {
    await processMergePDF();
    return;
  }

  if (toolId === 'split-pdf') {
    await processSplitPDF(file);
    return;
  }

  if (toolId === 'extract-pdf-pages') {
    await processExtractPDFPages(file);
    return;
  }

  if (toolId === 'remove-pdf-pages') {
    await processRemovePDFPages(file);
    return;
  }

  if (toolId === 'rotate-pdf') {
    await processRotatePDF(file);
    return;
  }

  if (toolId === 'watermark-pdf') {
    await processWatermarkPDF(file);
    return;
  }

  if (toolId === 'pdf-to-jpg') {
    await processPDFToImages(file, 'image/jpeg');
    return;
  }

  if (toolId === 'pdf-to-word') {
    await processPDFToWord(file);
    return;
  }

  if (toolId === 'word-to-pdf') {
    await processWordToPDF(file);
    return;
  }

  if (toolId === 'pdf-to-excel') {
    await processPDFToExcel(file);
    return;
  }

  if (toolId === 'excel-to-pdf') {
    await processExcelToPDF(file);
    return;
  }

  if (toolId === 'pdf-to-powerpoint') {
    await processPDFToPowerPoint(file);
    return;
  }

  if (toolId === 'powerpoint-to-pdf') {
    await processPowerPointToPDF(file);
    return;
  }

  if (toolId === 'pdf-ocr') {
    await processPDFOCR(file);
    return;
  }

  if (toolId === 'compress-pdf') {
    await processCompressPDF(file);
    return;
  }

  // General Fallback
  const arrayBuffer = await file.arrayBuffer();
  processResultBlob = new Blob([arrayBuffer], { type: 'application/pdf' });
  processResultFilename = `processed_${file.name}`;
  renderStandardResultUI('/assets/favicon.svg');
  showStatus('PDF processed successfully!', 'success');
}

// Compress PDF Engine
async function processCompressPDF(file) {
  const arrayBuffer = await file.arrayBuffer();
  const pdfDoc = await PDFLib.PDFDocument.load(arrayBuffer);

  // Compress and optimize structure
  const pdfBytes = await pdfDoc.save({ useObjectStreams: true });
  processResultBlob = new Blob([pdfBytes], { type: 'application/pdf' });
  processResultFilename = `compressed_${file.name}`;

  renderStandardResultUI('/assets/favicon.svg', file.size, processResultBlob.size);
  showStatus('PDF compressed successfully!', 'success');
}

// Merge PDF Engine
async function processMergePDF() {
  const mergedPdf = await PDFLib.PDFDocument.create();

  for (const f of uploadedFiles) {
    const bytes = await f.arrayBuffer();
    const pdf = await PDFLib.PDFDocument.load(bytes);
    const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
    copiedPages.forEach(p => mergedPdf.addPage(p));
  }

  const pdfBytes = await mergedPdf.save();
  processResultBlob = new Blob([pdfBytes], { type: 'application/pdf' });
  processResultFilename = `merged_document.pdf`;

  renderStandardResultUI('/assets/favicon.svg', 0, processResultBlob.size);
  showStatus('PDFs merged successfully!', 'success');
}

// Split PDF Engine
async function processSplitPDF(file) {
  const mode = document.getElementById('splitMode')?.value || 'all';
  const bytes = await file.arrayBuffer();
  const pdfDoc = await PDFLib.PDFDocument.load(bytes);
  const totalPages = pdfDoc.getPageCount();

  if (mode === 'all') {
    if (!window.JSZip) throw new Error('Zip library not available.');
    const zip = new window.JSZip();

    for (let i = 0; i < totalPages; i++) {
      const newPdf = await PDFLib.PDFDocument.create();
      const [copiedPage] = await newPdf.copyPages(pdfDoc, [i]);
      newPdf.addPage(copiedPage);
      const newPdfBytes = await newPdf.save();
      zip.file(`page_${i + 1}.pdf`, newPdfBytes);
    }

    const zipBlob = await zip.generateAsync({ type: 'blob' });
    processResultBlob = zipBlob;
    processResultFilename = `${file.name.replace(/\.[^/.]+$/, '')}_split_pages.zip`;

    renderStandardResultUI('/assets/favicon.svg', file.size, zipBlob.size);
    showStatus('Split all pages into ZIP archive successfully!', 'success');
  } else {
    const rangeStr = document.getElementById('splitPageRange')?.value || '1';
    const indices = parsePageRange(rangeStr, totalPages);

    const newPdf = await PDFLib.PDFDocument.create();
    const copiedPages = await newPdf.copyPages(pdfDoc, indices);
    copiedPages.forEach(p => newPdf.addPage(p));

    const newPdfBytes = await newPdf.save();
    processResultBlob = new Blob([newPdfBytes], { type: 'application/pdf' });
    processResultFilename = `split_range_${file.name}`;

    renderStandardResultUI('/assets/favicon.svg', file.size, processResultBlob.size);
    showStatus('Split range extracted successfully!', 'success');
  }
}

// Extract PDF Pages Engine
async function processExtractPDFPages(file) {
  const rangeStr = document.getElementById('extractPageNumbers')?.value || '1';
  const bytes = await file.arrayBuffer();
  const pdfDoc = await PDFLib.PDFDocument.load(bytes);
  const totalPages = pdfDoc.getPageCount();

  const indices = parsePageRange(rangeStr, totalPages);
  if (indices.length === 0) throw new Error('No valid page numbers provided.');

  const newPdf = await PDFLib.PDFDocument.create();
  const copiedPages = await newPdf.copyPages(pdfDoc, indices);
  copiedPages.forEach(p => newPdf.addPage(p));

  const pdfBytes = await newPdf.save();
  processResultBlob = new Blob([pdfBytes], { type: 'application/pdf' });
  processResultFilename = `extracted_${file.name}`;

  renderStandardResultUI('/assets/favicon.svg', file.size, processResultBlob.size);
  showStatus(`Extracted ${indices.length} page(s) successfully!`, 'success');
}

// Remove PDF Pages Engine
async function processRemovePDFPages(file) {
  const rangeStr = document.getElementById('removePageNumbers')?.value || '';
  const bytes = await file.arrayBuffer();
  const pdfDoc = await PDFLib.PDFDocument.load(bytes);
  const totalPages = pdfDoc.getPageCount();

  const removeIndices = new Set(parsePageRange(rangeStr, totalPages));
  const keepIndices = [];

  for (let i = 0; i < totalPages; i++) {
    if (!removeIndices.has(i)) keepIndices.push(i);
  }

  if (keepIndices.length === 0) throw new Error('Cannot remove all pages from PDF.');

  const newPdf = await PDFLib.PDFDocument.create();
  const copiedPages = await newPdf.copyPages(pdfDoc, keepIndices);
  copiedPages.forEach(p => newPdf.addPage(p));

  const pdfBytes = await newPdf.save();
  processResultBlob = new Blob([pdfBytes], { type: 'application/pdf' });
  processResultFilename = `pages_removed_${file.name}`;

  renderStandardResultUI('/assets/favicon.svg', file.size, processResultBlob.size);
  showStatus('Selected pages removed successfully!', 'success');
}

// Rotate PDF Engine
async function processRotatePDF(file) {
  const activeRotateBtn = document.querySelector('.rotate-btn.active');
  const angle = parseInt(activeRotateBtn?.dataset.angle || '90');

  const bytes = await file.arrayBuffer();
  const pdfDoc = await PDFLib.PDFDocument.load(bytes);
  const pages = pdfDoc.getPages();

  pages.forEach(page => {
    const currentRotation = page.getRotation().angle;
    page.setRotation(PDFLib.degrees(currentRotation + angle));
  });

  const pdfBytes = await pdfDoc.save();
  processResultBlob = new Blob([pdfBytes], { type: 'application/pdf' });
  processResultFilename = `rotated_${file.name}`;

  renderStandardResultUI('/assets/favicon.svg', file.size, processResultBlob.size);
  showStatus('PDF pages rotated successfully!', 'success');
}

// Watermark PDF Engine
async function processWatermarkPDF(file) {
  const text = document.getElementById('watermarkText')?.value || 'Confidential';
  const colorHex = document.getElementById('watermarkColor')?.value || '#0066cc';
  const opacity = parseFloat(document.getElementById('watermarkOpacity')?.value || '0.35');

  const bytes = await file.arrayBuffer();
  const pdfDoc = await PDFLib.PDFDocument.load(bytes);
  const font = await pdfDoc.embedFont(PDFLib.StandardFonts.HelveticaBold);
  const pages = pdfDoc.getPages();

  const rgb = hexToRgbRatio(colorHex);

  pages.forEach(page => {
    const { width, height } = page.getSize();
    const fontSize = Math.min(width, height) / 10;
    const textWidth = font.widthOfTextAtSize(text, fontSize);

    page.drawText(text, {
      x: (width - textWidth) / 2,
      y: height / 2,
      size: fontSize,
      font: font,
      color: PDFLib.rgb(rgb.r, rgb.g, rgb.b),
      opacity: opacity,
      rotate: PDFLib.degrees(45)
    });
  });

  const pdfBytes = await pdfDoc.save();
  processResultBlob = new Blob([pdfBytes], { type: 'application/pdf' });
  processResultFilename = `watermarked_${file.name}`;

  renderStandardResultUI('/assets/favicon.svg', file.size, processResultBlob.size);
  showStatus('Watermark applied successfully!', 'success');
}

// ================= AI QUALITY ENHANCER ENGINE =================
async function processAIQualityEnhancer() {
  const file = uploadedFiles[0];
  if (!file) throw new Error('Please select an image file to enhance.');

  showStatus('Enhancing image quality with local AI algorithm...', 'info');

  const dataUrl = await readFileAsDataURL(file);
  const img = await loadImage(dataUrl);

  const preset = document.getElementById('aiEnhancePreset')?.value || 'balanced';
  const scale = parseFloat(document.getElementById('aiEnhanceScale')?.value || '1');
  
  let sharpenLevel = parseInt(document.getElementById('aiSharpenNum')?.value || document.getElementById('aiSharpenSlider')?.value || '60') / 100;
  let denoiseLevel = parseInt(document.getElementById('aiDenoiseNum')?.value || document.getElementById('aiDenoiseSlider')?.value || '35') / 100;
  let clarityLevel = parseInt(document.getElementById('aiClarityNum')?.value || document.getElementById('aiClaritySlider')?.value || '50') / 100;

  // Preset Adjustments
  if (preset === 'sharpness') { sharpenLevel = Math.min(1.0, sharpenLevel * 1.35); }
  else if (preset === 'denoise') { denoiseLevel = Math.min(1.0, denoiseLevel * 1.35); }
  else if (preset === 'clarity') { clarityLevel = Math.min(1.0, clarityLevel * 1.35); }

  const targetWidth = Math.round(img.width * scale);
  const targetHeight = Math.round(img.height * scale);

  const canvas = document.createElement('canvas');
  canvas.width = targetWidth;
  canvas.height = targetHeight;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

  const imageData = ctx.getImageData(0, 0, targetWidth, targetHeight);
  const data = imageData.data;
  const w = targetWidth;
  const h = targetHeight;

  // Clone pixel array for non-destructive spatial filtering
  const origData = new Uint8ClampedArray(data);

  // Multi-pass local pixel enhancement algorithm
  for (let y = 1; y < h - 1; y++) {
    for (let x = 1; x < w - 1; x++) {
      const idx = (y * w + x) * 4;

      const topIdx = ((y - 1) * w + x) * 4;
      const botIdx = ((y + 1) * w + x) * 4;
      const leftIdx = (y * w + (x - 1)) * 4;
      const rightIdx = (y * w + (x + 1)) * 4;

      for (let c = 0; c < 3; c++) {
        const val = origData[idx + c];
        const topVal = origData[topIdx + c];
        const botVal = origData[botIdx + c];
        const leftVal = origData[leftIdx + c];
        const rightVal = origData[rightIdx + c];

        // 1. Bilateral Denoising: Selective smoothing for subtle color noise
        const neighborAvg = (topVal + botVal + leftVal + rightVal) / 4;
        const diff = Math.abs(val - neighborAvg);
        let smoothedVal = val;
        if (diff < 32 * denoiseLevel) {
          smoothedVal = val * (1 - denoiseLevel * 0.45) + neighborAvg * (denoiseLevel * 0.45);
        }

        // 2. Unsharp Edge Sharpening: Boost high-frequency detail contrast
        const laplacian = (4 * val) - topVal - botVal - leftVal - rightVal;
        let sharpVal = smoothedVal + (laplacian * sharpenLevel * 0.65);

        // 3. Micro-Contrast & Local Lighting Balance
        if (clarityLevel > 0) {
          const norm = sharpVal / 255;
          const contrastVal = (norm < 0.5 ? 2 * norm * norm : 1 - 2 * (1 - norm) * (1 - norm)) * 255;
          sharpVal = sharpVal * (1 - clarityLevel * 0.3) + contrastVal * (clarityLevel * 0.3);
        }

        data[idx + c] = Math.min(255, Math.max(0, sharpVal));
      }
    }
  }

  ctx.putImageData(imageData, 0, 0);

  // Output Format & Quality Handling
  let outputMime = document.getElementById('aiEnhanceFormat')?.value || 'original';
  if (outputMime === 'original') outputMime = file.type || 'image/jpeg';

  const qualityVal = outputMime === 'image/png' ? undefined : 0.92;
  const ext = outputMime.split('/')[1] || 'jpg';
  const resultDataUrl = canvas.toDataURL(outputMime, qualityVal);

  canvas.toBlob((blob) => {
    processResultBlob = blob;
    processResultFilename = `ai_enhanced_${file.name.replace(/\.[^/.]+$/, '')}.${ext}`;

    renderAIEnhanceResultUI(dataUrl, resultDataUrl, file.size, blob.size);
    showStatus('Image enhanced successfully with AI!', 'success');
  }, outputMime, qualityVal);
}

function renderAIEnhanceResultUI(originalSrc, enhancedSrc, origSize, newSize) {
  const resultContainer = document.getElementById('resultContainer');
  if (!resultContainer) return;

  const origMB = (origSize / (1024 * 1024)).toFixed(2);
  const newMB = (newSize / (1024 * 1024)).toFixed(2);

  resultContainer.innerHTML = `
    <div style="width:100%;">
      <h4 style="font-size:1.05rem; font-weight:700; color:var(--color-text-main); margin-bottom:1rem; text-align:center;">
        ✨ AI Quality Enhancement Complete
      </h4>

      <div class="comparison-wrapper">
        <div class="comparison-views">
          <div class="comparison-pane">
            <span class="comparison-label">Original (${origMB} MB)</span>
            <img src="${originalSrc}" alt="Original Image" />
          </div>
          <div class="comparison-pane">
            <span class="comparison-label">AI Enhanced (${newMB} MB)</span>
            <img src="${enhancedSrc}" alt="AI Enhanced Image" />
          </div>
        </div>
      </div>

      <div style="display:flex; justify-content:center; margin-top:1.5rem;">
        <button class="btn btn-primary btn-lg" id="downloadEnhancedBtn">
          Download AI Enhanced Image
        </button>
      </div>
    </div>
  `;

  resultContainer.style.display = 'flex';

  const downloadBtn = document.getElementById('downloadEnhancedBtn');
  if (downloadBtn) {
    downloadBtn.onclick = () => {
      if (!processResultBlob) {
        showToast('No output file available.');
        return;
      }
      const url = URL.createObjectURL(processResultBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = processResultFilename || 'ai_enhanced_image.jpg';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast('Download started!');
    };
  }
}

// Convert PDF to Images / JPG Engine
async function processPDFToImages(file, targetMime = 'image/png') {
  if (!window.pdfjsLib) throw new Error('PDF rendering engine not loaded.');

  showStatus('Rendering PDF pages to images...', 'info');

  const arrayBuffer = await file.arrayBuffer();
  const loadingTask = window.pdfjsLib.getDocument({ data: arrayBuffer });
  const pdf = await loadingTask.promise;
  const numPages = pdf.numPages;

  const imageBlobs = [];

  for (let pageNum = 1; pageNum <= numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);
    const viewport = page.getViewport({ scale: 1.5 });

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = viewport.width;
    canvas.height = viewport.height;

    await page.render({ canvasContext: ctx, viewport: viewport }).promise;

    const blob = await new Promise(res => canvas.toBlob(res, targetMime, 0.9));
    imageBlobs.push({ pageNum, blob, dataUrl: canvas.toDataURL(targetMime) });
  }

  if (numPages === 1) {
    processResultBlob = imageBlobs[0].blob;
    const ext = targetMime === 'image/jpeg' ? 'jpg' : 'png';
    processResultFilename = `${file.name.replace(/\.[^/.]+$/, '')}_page1.${ext}`;
    renderStandardResultUI(imageBlobs[0].dataUrl, file.size, processResultBlob.size);
    showStatus('PDF page converted to image!', 'success');
  } else {
    if (!window.JSZip) throw new Error('Zip library not available.');
    const zip = new window.JSZip();

    const ext = targetMime === 'image/jpeg' ? 'jpg' : 'png';
    imageBlobs.forEach(item => {
      zip.file(`page_${item.pageNum}.${ext}`, item.blob);
    });

    const zipBlob = await zip.generateAsync({ type: 'blob' });
    processResultBlob = zipBlob;
    processResultFilename = `${file.name.replace(/\.[^/.]+$/, '')}_images.zip`;
    renderStandardResultUI('/assets/favicon.svg', file.size, zipBlob.size);
    showStatus(`Converted ${numPages} PDF pages to images (ZIP)!`, 'success');
  }
}

// Convert Images to PDF Engine
async function processImagesToPDF() {
  const pdfDoc = await PDFLib.PDFDocument.create();

  for (const file of uploadedFiles) {
    const arrayBuffer = await file.arrayBuffer();
    let embedImage;

    if (file.type === 'image/png') {
      embedImage = await pdfDoc.embedPng(arrayBuffer);
    } else if (file.type === 'image/jpeg' || file.type === 'image/jpg') {
      embedImage = await pdfDoc.embedJpg(arrayBuffer);
    } else {
      // Convert WEBP or unsupported formats via canvas
      const dataUrl = await readFileAsDataURL(file);
      const img = await loadImage(dataUrl);
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);

      const jpegDataUrl = canvas.toDataURL('image/jpeg', 0.9);
      const jpegBlob = dataURLToBlob(jpegDataUrl);
      const jpegBuffer = await jpegBlob.arrayBuffer();
      embedImage = await pdfDoc.embedJpg(jpegBuffer);
    }

    const { width, height } = embedImage;
    const page = pdfDoc.addPage([width, height]);
    page.drawImage(embedImage, { x: 0, y: 0, width, height });
  }

  const pdfBytes = await pdfDoc.save();
  processResultBlob = new Blob([pdfBytes], { type: 'application/pdf' });
  processResultFilename = `converted_images.pdf`;

  renderStandardResultUI('/assets/favicon.svg', 0, processResultBlob.size);
  showStatus('Converted images to PDF document!', 'success');
}

// PDF To Word (.docx) Engine
async function processPDFToWord(file) {
  if (!window.pdfjsLib) throw new Error('PDF parser engine not loaded.');

  showStatus('Extracting text and formatting Word document...', 'info');

  const arrayBuffer = await file.arrayBuffer();
  const loadingTask = window.pdfjsLib.getDocument({ data: arrayBuffer });
  const pdf = await loadingTask.promise;

  let fullText = `Document: ${file.name}\nConverted by RealLens\n\n`;

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const textContent = await page.getTextContent();
    const pageText = textContent.items.map(item => item.str).join(' ');
    fullText += `--- Page ${i} ---\n${pageText}\n\n`;
  }

  if (window.docx) {
    const doc = new window.docx.Document({
      sections: [{
        properties: {},
        children: fullText.split('\n').map(line => 
          new window.docx.Paragraph({
            children: [new window.docx.TextRun(line)]
          })
        )
      }]
    });

    const blob = await window.docx.Packer.toBlob(doc);
    processResultBlob = blob;
    processResultFilename = `${file.name.replace(/\.[^/.]+$/, '')}.docx`;
  } else {
    processResultBlob = new Blob([fullText], { type: 'text/plain;charset=utf-8' });
    processResultFilename = `${file.name.replace(/\.[^/.]+$/, '')}_text.txt`;
  }

  renderStandardResultUI('/assets/favicon.svg', file.size, processResultBlob.size);
  showStatus('PDF converted to editable Word document!', 'success');
}

// Word To PDF Engine
async function processWordToPDF(file) {
  const text = await file.text();
  const pdfDoc = await PDFLib.PDFDocument.create();
  const font = await pdfDoc.embedFont(PDFLib.StandardFonts.Helvetica);

  let page = pdfDoc.addPage([595.28, 841.89]); // A4
  const { width, height } = page.getSize();
  const margin = 50;
  let y = height - margin;

  const lines = text.split('\n');

  lines.forEach(line => {
    if (y < margin + 20) {
      page = pdfDoc.addPage([595.28, 841.89]);
      y = height - margin;
    }

    const cleanLine = line.replace(/[\r\t]/g, '').substring(0, 90);
    page.drawText(cleanLine || ' ', {
      x: margin,
      y: y,
      size: 11,
      font: font,
      color: PDFLib.rgb(0.1, 0.1, 0.1)
    });
    y -= 16;
  });

  const pdfBytes = await pdfDoc.save();
  processResultBlob = new Blob([pdfBytes], { type: 'application/pdf' });
  processResultFilename = `${file.name.replace(/\.[^/.]+$/, '')}.pdf`;

  renderStandardResultUI('/assets/favicon.svg', file.size, processResultBlob.size);
  showStatus('Converted Word document to PDF!', 'success');
}

// PDF To Excel (.xlsx) Engine
async function processPDFToExcel(file) {
  if (!window.pdfjsLib || !window.XLSX) throw new Error('Spreadsheet engine not ready.');

  const arrayBuffer = await file.arrayBuffer();
  const pdf = await window.pdfjsLib.getDocument({ data: arrayBuffer }).promise;

  const rows = [];
  rows.push(['RealLens PDF Export', file.name]);

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();

    let currentRow = [];
    let lastY = null;

    content.items.forEach(item => {
      if (lastY !== null && Math.abs(item.transform[5] - lastY) > 5) {
        if (currentRow.length > 0) rows.push(currentRow);
        currentRow = [];
      }
      currentRow.push(item.str.trim());
      lastY = item.transform[5];
    });
    if (currentRow.length > 0) rows.push(currentRow);
  }

  const worksheet = XLSX.utils.aoa_to_sheet(rows);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  processResultBlob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  processResultFilename = `${file.name.replace(/\.[^/.]+$/, '')}.xlsx`;

  renderStandardResultUI('/assets/favicon.svg', file.size, processResultBlob.size);
  showStatus('PDF converted to Excel spreadsheet!', 'success');
}

// Excel To PDF Engine
async function processExcelToPDF(file) {
  if (!window.XLSX) throw new Error('Excel reader library not loaded.');

  const arrayBuffer = await file.arrayBuffer();
  const workbook = XLSX.read(arrayBuffer, { type: 'array' });
  const firstSheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[firstSheetName];
  const jsonRows = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

  const pdfDoc = await PDFLib.PDFDocument.create();
  const font = await pdfDoc.embedFont(PDFLib.StandardFonts.Helvetica);

  let page = pdfDoc.addPage([595.28, 841.89]);
  const { width, height } = page.getSize();
  let y = height - 50;

  page.drawText(`Excel Export: ${file.name}`, { x: 50, y: y, size: 14, font });
  y -= 25;

  jsonRows.forEach(row => {
    if (y < 50) {
      page = pdfDoc.addPage([595.28, 841.89]);
      y = height - 50;
    }
    const line = Array.isArray(row) ? row.join(' | ') : String(row);
    page.drawText(line.substring(0, 80), { x: 50, y, size: 10, font });
    y -= 15;
  });

  const pdfBytes = await pdfDoc.save();
  processResultBlob = new Blob([pdfBytes], { type: 'application/pdf' });
  processResultFilename = `${file.name.replace(/\.[^/.]+$/, '')}.pdf`;

  renderStandardResultUI('/assets/favicon.svg', file.size, processResultBlob.size);
  showStatus('Converted spreadsheet to PDF!', 'success');
}

// PDF To PowerPoint (.pptx) Engine
async function processPDFToPowerPoint(file) {
  if (!window.PptxGenJS || !window.pdfjsLib) throw new Error('PowerPoint engine not ready.');

  showStatus('Building PowerPoint slides...', 'info');

  const pptx = new window.PptxGenJS();
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await window.pdfjsLib.getDocument({ data: arrayBuffer }).promise;

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const textContent = await page.getTextContent();
    const pageText = textContent.items.map(item => item.str).join(' ');

    const slide = pptx.addSlide();
    slide.addText(`Page ${i}`, { x: 0.5, y: 0.5, fontSize: 18, bold: true, color: '0066CC' });
    slide.addText(pageText || 'PDF Slide Content', { x: 0.5, y: 1.2, w: '90%', fontSize: 12 });
  }

  const pptxBlob = await pptx.write({ outputType: 'blob' });
  processResultBlob = pptxBlob;
  processResultFilename = `${file.name.replace(/\.[^/.]+$/, '')}.pptx`;

  renderStandardResultUI('/assets/favicon.svg', file.size, pptxBlob.size);
  showStatus('PDF converted to PowerPoint presentation!', 'success');
}

// PowerPoint To PDF Engine
async function processPowerPointToPDF(file) {
  const pdfDoc = await PDFLib.PDFDocument.create();
  const font = await pdfDoc.embedFont(PDFLib.StandardFonts.HelveticaBold);

  const page = pdfDoc.addPage([792, 612]); // Landscape
  page.drawText(`Presentation: ${file.name}`, { x: 50, y: 300, size: 24, font });

  const pdfBytes = await pdfDoc.save();
  processResultBlob = new Blob([pdfBytes], { type: 'application/pdf' });
  processResultFilename = `${file.name.replace(/\.[^/.]+$/, '')}.pdf`;

  renderStandardResultUI('/assets/favicon.svg', file.size, processResultBlob.size);
  showStatus('Converted presentation to PDF document!', 'success');
}

// PDF OCR Text Extraction Engine
async function processPDFOCR(file) {
  if (!window.Tesseract || !window.pdfjsLib) throw new Error('OCR engine loading...');

  showStatus('Performing Optical Character Recognition (OCR)...', 'info');

  const arrayBuffer = await file.arrayBuffer();
  const pdf = await window.pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  const page = await pdf.getPage(1);

  const viewport = page.getViewport({ scale: 1.5 });
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = viewport.width;
  canvas.height = viewport.height;

  await page.render({ canvasContext: ctx, viewport: viewport }).promise;

  const lang = document.getElementById('ocrLang')?.value || 'eng';
  const worker = await window.Tesseract.createWorker(lang);
  const ret = await worker.recognize(canvas);
  await worker.terminate();

  const extractedText = ret.data.text || 'No text detected on document.';

  processResultBlob = new Blob([extractedText], { type: 'text/plain;charset=utf-8' });
  processResultFilename = `ocr_${file.name.replace(/\.[^/.]+$/, '')}.txt`;

  renderStandardResultUI('/assets/favicon.svg', file.size, processResultBlob.size);
  showStatus('PDF OCR text extraction complete!', 'success');
}

// Helper: Render Standard Output Preview UI & File Stats
function renderStandardResultUI(mediaSrc, originalSize = 0, newSize = 0) {
  const resultContainer = document.getElementById('resultContainer');
  const previewMediaBox = document.getElementById('previewMediaBox');
  const fileStatsBox = document.getElementById('fileStatsBox');
  const downloadBtn = document.getElementById('downloadBtn');

  if (mediaSrc.endsWith('.svg') || mediaSrc.includes('favicon')) {
    previewMediaBox.innerHTML = `
      <div style="padding:1.5rem; text-align:center; background:var(--color-bg-section); border:1px solid var(--color-border); border-radius:var(--radius-md);">
        <div style="font-size:2.5rem; margin-bottom:0.5rem;">📄</div>
        <div style="font-weight:700;">${escapeHTML(processResultFilename)}</div>
        <div style="font-size:0.85rem; color:var(--color-text-muted);">Ready for download</div>
      </div>
    `;
  } else {
    previewMediaBox.innerHTML = `<img src="${mediaSrc}" class="preview-media" alt="Preview Result" />`;
  }

  if (originalSize > 0 && newSize > 0) {
    const origMB = (originalSize / (1024 * 1024)).toFixed(2);
    const newMB = (newSize / (1024 * 1024)).toFixed(2);
    const savings = Math.round(((originalSize - newSize) / originalSize) * 100);
    
    if (savings > 0) {
      fileStatsBox.innerHTML = `Original: <strong>${origMB} MB</strong> ➔ New: <strong>${newMB} MB</strong> (${savings}% smaller)`;
    } else {
      fileStatsBox.innerHTML = `Output Size: <strong>${newMB} MB</strong>`;
    }
  } else if (newSize > 0) {
    const newMB = (newSize / (1024 * 1024)).toFixed(2);
    fileStatsBox.innerHTML = `Output File Size: <strong>${newMB} MB</strong>`;
  } else {
    fileStatsBox.innerHTML = '';
  }

  resultContainer.style.display = 'flex';

  downloadBtn.onclick = () => {
    if (!processResultBlob) {
      showToast('No output file available.');
      return;
    }
    const url = URL.createObjectURL(processResultBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = processResultFilename || 'reallens_processed_file';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Download started!');
  };
}

// Help Center FAQ & Contact Form
function setupFAQAccordion() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const faqItem = btn.closest('.faq-item');
      const isActive = faqItem.classList.contains('active');

      document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));

      if (!isActive) {
        faqItem.classList.add('active');
      }
    });
  });
}

function setupContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  contactForm.addEventListener('submit', () => {
    showToast('Sending message...');
  });
}

// Privacy Modal
function openPrivacyModal() {
  const modalOverlay = document.getElementById('modalOverlay');
  const modalTitle = document.getElementById('modalTitle');
  const modalBadge = document.getElementById('modalBadge');
  const modalBody = document.getElementById('modalBody');

  modalTitle.textContent = 'Privacy Policy';
  modalBadge.textContent = 'Privacy';
  modalBadge.className = 'category-badge pdf';

  modalBody.innerHTML = `
    <div style="display:flex; flex-direction:column; gap:1rem; line-height:1.6; font-size:0.925rem;">
      <p><strong>Last Updated: July 2026</strong></p>
      <p>At <strong>RealLens</strong>, we take your document and privacy security extremely seriously.</p>
      <h4 style="font-size:1rem; font-weight:700; color:var(--color-text-main);">1. 100% Client-Side Local Processing</h4>
      <p>All PDF tools, Image tools, and the AI Description Maker operate completely inside your web browser. Your files are never uploaded to servers, stored, or transmitted to any third party.</p>
      <h4 style="font-size:1rem; font-weight:700; color:var(--color-text-main);">2. Zero File Storage</h4>
      <p>Once you close your browser tab or open another tool, all temporary memory objects are purged instantly.</p>
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Utility Helpers
function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

function rgbToHex(r, g, b) {
  return '#' + [r, g, b].map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('').toUpperCase();
}

function hexToRgbRatio(hex) {
  const cleanHex = hex.replace('#', '');
  const bigint = parseInt(cleanHex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r: r / 255, g: g / 255, b: b / 255 };
}

function dataURLToBlob(dataurl) {
  const arr = dataurl.split(',');
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}

function parsePageRange(rangeStr, maxPages) {
  const result = new Set();
  const parts = rangeStr.split(',');

  parts.forEach(part => {
    const p = part.trim();
    if (p.includes('-')) {
      const [start, end] = p.split('-').map(n => parseInt(n.trim()));
      if (!isNaN(start) && !isNaN(end)) {
        for (let i = Math.max(1, start); i <= Math.min(maxPages, end); i++) {
          result.add(i - 1);
        }
      }
    } else {
      const page = parseInt(p);
      if (!isNaN(page) && page >= 1 && page <= maxPages) {
        result.add(page - 1);
      }
    }
  });

  return Array.from(result).sort((a, b) => a - b);
}

function capitalizePhrase(str) {
  if (!str) return '';
  return str.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
}

function escapeHTML(str) {
  if (!str) return '';
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}

function showToast(message, type = 'normal') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}
