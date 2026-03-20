
# 🌐 Anand  — Personal Portfolio

Welcome to my **developer portfolio** built with **Next.js 15**, **Tailwind CSS**, and modern web tools.  
This site showcases my journey, skills, internships, and projects — wrapped in a sleek, animated, and responsive UI.

---

## 🚀 Live Demo

🔗 [Visit Portfolio Website](https://github.com/anandkumarkashyap/portfolio_website)

---

## 👨‍💻 About Me

I'm **Anand Kumar**, a passionate Full-Stack Developer specializing in:

- **Languages**: C++, Python, JavaScript, TypeScript, Java
- **Frameworks**: React.js, Next.js, Node.js, Express.js, Tailwind CSS
- **Databases**: PostgreSQL, MongoDB, Prisma
- **Tools**: Git, GitHub, Linux, Postman

📧 [anandkashyap6048@gmail.com](mailto:anandkashyap6048@gmail.com)  
🔗 [LinkedIn](https://linkedin.com/in/anandkashyap6048) · [GitHub](https://github.com/anandkumarkashyap)

---

## 🧠 Tech Stack

| Category | Technology |
|----------|-----------|
| ⚡ Framework | [Next.js 15](https://nextjs.org/) |
| 🎨 Styling | [Tailwind CSS 3](https://tailwindcss.com/) |
| 💻 Language | TypeScript |
| 🎞️ Animations | [GSAP](https://gsap.com/) + [Lottie React](https://www.npmjs.com/package/lottie-react) |
| 📧 Contact | [EmailJS](https://www.emailjs.com/) |
| 📦 PWA | [`@ducanh2912/next-pwa`](https://www.npmjs.com/package/@ducanh2912/next-pwa) |
| 🧠 Icons | [Lucide](https://lucide.dev/), [React Icons](https://react-icons.github.io/) |
| ✅ Code Quality | Prettier + ESLint + Husky |

---

## 📁 Folder Structure

```
portfolio_website/
├── public/
│   └── assets/                   # All static media assets
│       ├── profile/              # Profile photo → profile.jpg
│       ├── logo/                 # Site logo → logo.png
│       ├── og/                   # Open Graph preview image → og-image.png
│       └── projects/             # One subfolder per project
│           ├── jobboard/         # → jobboard.png (+ more screenshots)
│           ├── nashamukti/       # → nashamukti.png
│           └── bmjunction/       # → bmjunction.png
│
├── src/
│   └── app/
│       ├── components/           # Reusable UI & page sections
│       │   ├── hero-section/
│       │   ├── about/
│       │   ├── experience/
│       │   ├── skills/
│       │   ├── projects/
│       │   ├── education/
│       │   ├── contact/
│       │   ├── Navbar.tsx
│       │   └── Footer.tsx
│       ├── projects/[id]/        # Dynamic project detail page
│       ├── css/                  # Custom CSS
│       ├── fonts/                # Local fonts
│       ├── layout.tsx            # Root layout + SEO metadata
│       └── page.tsx              # Home page
│
├── utils/
│   └── Data/                     # All site data (edit these to update content)
│       ├── PersonalData.ts       # Name, bio, email, links
│       ├── projects-data.ts      # Projects list
│       ├── experience.ts         # Internships & training
│       ├── educations.ts         # Education history
│       └── skills.ts             # Skills list
│
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

---

## 🛠️ Getting Started

### 1. Clone this repo

```bash
git clone https://github.com/anandkumarkashyap/portfolio_website.git
cd portfolio_website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Then visit: [http://localhost:3000](http://localhost:3000)

---

## 🖼️ Adding Your Assets

Drop your files in the correct folder under `public/assets/`:

| Asset | Path |
|-------|------|
| Profile photo | `public/assets/profile/profile.jpg` |
| Site logo | `public/assets/logo/logo.png` |
| OG preview image | `public/assets/og/og-image.png` (1200×630px) |
| JobBoard screenshot | `public/assets/projects/jobboard/jobboard.png` |
| NashaMukti screenshot | `public/assets/projects/nashamukti/nashamukti.png` |
| BM Junction screenshot | `public/assets/projects/bmjunction/bmjunction.png` |

> To add a **new project**, create a new subfolder under `public/assets/projects/<project-name>/` and add its entry in `utils/Data/projects-data.ts`.

---

## 🧪 Environment Variables

Copy `example.env` and create `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

---

## 📦 Deployment

Deploy easily on [Vercel](https://vercel.com/):

```bash
# Connect your GitHub repo on vercel.com and deploy in one click
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 📬 Contact

Got a project in mind or just want to say hi?

📧 [anandkashyap6048@gmail.com](mailto:anandkashyap6048@gmail.com)  
🔗 [linkedin.com/in/anandkashyap6048](https://linkedin.com/in/anandkashyap6048)  
🐙 [github.com/anandkumarkashyap](https://github.com/anandkumarkashyap)

