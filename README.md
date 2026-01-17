# Kavu Maithri Rao - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Vite. This portfolio showcases my skills, experience, and projects with a beautiful UI and smooth animations.

## 🚀 Features

- **Modern Design**: Clean and professional layout with a dark theme
- **Responsive**: Fully responsive design that works on all devices
- **Multilingual**: Support for English and German languages
- **Interactive**: Smooth animations and transitions using Framer Motion
- **Contact Form**: Functional contact form using EmailJS
- **TypeScript**: Fully typed for better development experience
- **Fast**: Built with Vite for lightning-fast development and builds

## 🛠️ Technologies Used

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Internationalization**: react-i18next
- **Contact Form**: EmailJS
- **Smooth Scrolling**: react-scroll

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/ab-portfolio.git
cd ab-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory and add your EmailJS credentials:
```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📝 Customization Guide

### Personal Information
1. Update contact details in `src/components/contactMeSection/ContactInfo.tsx`
2. Update social media links in `src/components/contactMeSection/ContactSocial.tsx`
3. Update content in `src/locale/en.json` and `src/locale/de.json`

### Experience & Projects
1. Update your work experience in `src/locale/en.json` under `experienceAllYearCategorization`
2. Update your projects in `src/constants/projectsData.ts`
3. Update your skills in `src/constants/skillsData.ts`

### Images
Replace images in the `public/images/` directory with your own:
- `about-me.jpg` - Your profile picture
- `HexaPic.jpeg` - Alternative profile picture
- `website-img-*.jpg` - Your project screenshots

## 📱 Sections

- **Hero**: Introduction and animated text
- **About Me**: Personal introduction and call-to-action
- **Skills**: Technical skills with icons
- **Experience**: Work history and achievements
- **Projects**: Portfolio projects with GitHub links
- **Contact**: Contact form and information

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Add environment variables in Netlify dashboard

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📞 Contact

- Email: your.email@gmail.com
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/your-profile)
- GitHub: [Your GitHub Profile](https://github.com/your-username)
