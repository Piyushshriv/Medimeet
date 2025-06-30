 MediMeet – A Modern Doctors Appointment and Telemedicine Platform

MediMeet is a robust, full-stack Doctors Appointment Platform engineered to simplify and modernize the way patients, doctors, and administrators interact with healthcare services online. This project delivers an end-to-end solution combining intuitive booking, secure video consultations, medical record management, and a versatile credits system for paid consultations—all underpinned by a clean, responsive user experience and a modular, scalable architecture.

This repository contains the complete source code, documentation, and configuration files necessary to deploy and customize MediMeet. Built with modern web development technologies, MediMeet can serve as both a production-ready platform and a foundational framework for extending telehealth capabilities.

---

## 🌟 **Key Features**

Below is an overview of the core capabilities MediMeet offers for each role in the ecosystem—Patients, Doctors, and Admins.

---

### 🩺 1. Video Consultation

MediMeet enables real-time, high-quality video consultations between patients and doctors using **Vonage Video API**. This functionality ensures that patients can receive care remotely, reducing barriers to access and improving appointment flexibility.

* **Secure Video Sessions:** All video streams are encrypted end-to-end using Vonage infrastructure.
* **Appointment Scheduling Integration:** Video calls are linked to scheduled consultations, ensuring only authorized participants can join.
* **Join Links:** Unique consultation links are generated per appointment.
* **Status Tracking:** Doctors and patients can monitor appointment status (upcoming, in-progress, completed) within their dashboards.

---

### 📝 2. Medical Documentation

MediMeet provides tools for maintaining accurate records of consultations and treatment plans.

* **Consultation Notes:** Doctors can record and update medical notes during or after a session.
* **Prescription Management:** Issue and store prescriptions securely.
* **Downloadable Reports:** Patients can download consultation summaries in PDF format.
* **Audit Trail:** Every change to a record is logged for transparency.

---

### 💳 3. Consultation Credits

The platform includes a **credits system** to manage paid consultations:

* **Credits Balance:** Patients have a credits wallet that they can top up via secure payment gateways.
* **Deduction on Booking:** Credits are deducted automatically when appointments are confirmed.
* **Admin Adjustments:** Administrators can credit or debit balances manually as needed.
* **Invoices:** Automatic invoice generation for each transaction.

---

### 🧭 4. Multi-Role Dashboards

MediMeet provides dedicated dashboards tailored to the needs of each user type:

#### 👤 Patient Dashboard

* View upcoming and past appointments.
* Book new appointments with doctors.
* Join video consultations.
* Download prescriptions and records.
* Manage credits and payment history.
* Update profile and contact information.

#### 🩺 Doctor Dashboard

* Manage availability and schedule.
* Review and confirm appointments.
* Host video consultations.
* Maintain patient records and consultation notes.
* Access earnings and payouts reports.

#### 🛡️ Admin Dashboard

* Manage the entire platform ecosystem.
* Approve or suspend doctor accounts.
* Monitor appointments and financial transactions.
* Adjust credits and handle disputes.
* View analytics on platform usage and revenue.

---

## 🛠️ **Tools and Technologies**

MediMeet is built with a modern, performance-focused tech stack that ensures a responsive user experience, high scalability, and robust security:

---

### ⚡ Next.js

**Next.js** serves as the foundation of the frontend and backend:

* **Server-Side Rendering (SSR):** Delivers fast initial loads and SEO-friendly pages.
* **API Routes:** Encapsulate backend logic (appointment creation, payment handling, etc.) without needing a separate server.
* **Static Generation:** Efficiently serves public pages (e.g., landing, pricing).

---

### 🎨 Tailwind CSS

**Tailwind CSS** provides utility-first styling:

* Rapid development of responsive layouts.
* Consistent design language across components.
* Dark mode and accessibility features included out of the box.

---

### 🧩 Shadcn/UI

**Shadcn** offers a collection of high-quality, accessible UI components:

* Dialogs, dropdowns, and tabs with excellent UX.
* Fully customizable to fit MediMeet’s branding.
* Composable architecture for building complex interfaces.

---

### 🛡️ Clerk

**Clerk Authentication** powers secure login and account management:

* Email/password and OAuth providers (Google, etc.).
* Role-based access control (Admins, Doctors, Patients).
* Session management with automatic token refresh.

---

### 🧬 Prisma ORM

**Prisma** handles data modeling and database access:

* **Type-Safe Queries:** Prevents common bugs in database interactions.
* **Migration System:** Easily evolve the schema over time.
* **Relations:** Efficient handling of complex relations (e.g., patients ↔ appointments ↔ doctors).

---

### 🌐 Neon Database

**Neon** is the managed PostgreSQL database used to store application data:

* Scalable and serverless Postgres with branching.
* Automated backups and point-in-time recovery.
* Optimized for production workloads.

---

### 📹 Vonage Video API

**Vonage** (formerly OpenTok) facilitates real-time video:

* Robust SDKs for browser-based video.
* Secure session tokens for access control.
* Recording capabilities for compliance (optional).

---

## 💡 **How MediMeet Works**

Here’s a high-level flow of how users interact with the system:

1. **Patient Registration and Login:**
   Users create accounts via Clerk and select the patient role.

2. **Booking an Appointment:**
   Patients browse doctor profiles, view availability, and book appointments using credits.

3. **Video Consultation:**
   At the scheduled time, both parties join the secure Vonage video room from their dashboard.

4. **Documentation:**
   Doctors add notes and issue prescriptions after the consultation.

5. **Payments and Credits:**
   Credits are automatically deducted, and invoices are issued. Patients can top up credits as needed.

6. **Admin Oversight:**
   Admins monitor all activity, manage disputes, and maintain platform compliance.



MediMeet combines a modern stack—**Next.js**, **Vonage**, **Tailwind**, **Prisma**, **Shadcn**, **Neon**, and **Clerk**—to deliver a seamless telehealth experience. Whether you are looking to deploy this as a standalone platform or use it as a foundation to build new features, MediMeet offers the flexibility and scalability to meet the demands of contemporary digital healthcare.

