# Arogya Anugraha: Intelligent Symptom Analysis & Personalized Health Pathways

[![Next.js](https://img.shields.io/badge/Next.js-Black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white)](https://www.tensorflow.org/)
[![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2671E5?style=for-the-badge&logo=githubactions&logoColor=white)](https://github.com/features/actions)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

---

## Repository: `arogya-anugraha-app`

### 🌟 Project Overview

**Arogya Anugraha** is a comprehensive healthcare application developed as my final year project in Computer Science and Engineering. This project stands as a testament to my ability to integrate cutting-edge Machine Learning with robust cloud infrastructure to address real-world challenges in the healthcare domain.

At its core, Arogya Anugraha provides users with preliminary, data-driven insights into potential health conditions based on their reported symptoms and basic health information. My goal was to create an accessible and privacy-conscious tool that empowers individuals with enhanced health awareness and guides them towards proactive health management, all while adhering to the highest standards of responsible AI practices.

This project showcases a full-stack development approach, demonstrating proficiency across frontend, backend, and a custom-built ML pipeline.

### 💡 Problem Statement

In an age of abundant, yet often overwhelming and fragmented, online health information, individuals frequently struggle to accurately interpret their symptoms or understand complex medical terminology. This can lead to unnecessary anxiety, delayed professional medical consultation, or even misinformed self-diagnosis. Arogya Anugraha directly addresses this critical need by offering an intelligent, preliminary analysis tool that educates users about potential health conditions, serving as a supportive resource rather than a diagnostic replacement.

### ✨ Key Features

* **Secure User Authentication:** Robust user registration and login functionalities, supporting both email/password and seamless Google Sign-In, ensuring data security.
* **Personalized Health Profiles:** Users can securely create and manage their health profiles, including anonymized basic health metrics (e.g., age, gender) and a comprehensive history of their symptom entries.
* **Intuitive Symptom Input:** A thoughtfully designed user interface allows for easy input of symptoms, accommodating various formats from free-text descriptions to selections from a curated list.
* **Custom ML-Powered Analysis:** The heart of the application, utilizing a custom-trained Machine Learning model to analyze reported symptoms and provide data-backed suggestions for potential health conditions, complete with confidence scores.
* **Personalized Health Insights:** Delivers concise, easy-to-understand explanations of predicted conditions and offers general, non-diagnostic health recommendations, promoting user education.
* **Symptom History Tracking:** Provides users with a clear overview of their past symptom analysis records, enabling them to track health trends over time.
* **Scalable & Reliable Backend:** Built entirely on Firebase, ensuring real-time data synchronization, secure file management, and efficient serverless logic that scales effortlessly.
* **Responsive User Interface:** A modern, intuitive, and fully responsive design crafted for a seamless and engaging user experience across all devices (web and mobile).
* **Automated Continuous Deployment:** Integrated with GitHub Actions to provide a robust CI/CD pipeline, ensuring that the latest updates are automatically built and deployed to Firebase Hosting upon every code push.

### 🛠️ Technology Stack

* **Frontend:** Developed with **Next.js** and **React**, leveraging **TypeScript** for type safety and maintainability, styled efficiently with **CSS**. The development environment is powered by **Firebase Studio**.
* **Backend & Cloud Services (Firebase):**
    * **Authentication:** Firebase Authentication for secure and flexible user management.
    * **Database:** **Cloud Firestore** for real-time, NoSQL data storage of structured user data, symptom logs, and historical predictions.
    * **Storage:** **Firebase Cloud Storage** for scalable and secure storage of potential user-uploaded images and ML model files.
    * **Serverless Logic:** **Firebase Cloud Functions** (Node.js/Python) for executing backend code in response to events, enabling advanced data processing, notifications, and ML inference orchestration.
    * **Hosting:** **Firebase Hosting** for fast, secure, and reliable deployment of the web application.
    * **Analytics & Monitoring:** **Firebase Analytics**, **Performance Monitoring**, and **Crashlytics** for comprehensive app usage insights, performance tracking, and stability management.
* **Machine Learning:**
    * **Model Development:** Python-based ML pipeline utilizing **TensorFlow/Keras** for neural network development, **scikit-learn** for traditional ML algorithms and preprocessing, and **Pandas/NumPy** for data manipulation.
    * **Model Deployment:** Optimized for edge devices, the custom model is converted to **TensorFlow Lite (.tflite)** format and deployed via **Firebase ML Kit (Custom Model Deployment)**, allowing for efficient on-device inference.

### 🧠 Machine Learning Details: My Custom AI Core

At the core of Arogya Anugraha is a custom-built Machine Learning model, a testament to my hands-on experience across the entire ML lifecycle:

* **Model Type:** A sophisticated classification model meticulously designed to predict potential health conditions based on diverse input features.
* **Dataset:** (Specify your chosen dataset here, e.g., "A publicly available, anonymized symptom-disease dataset from the UCI Machine Learning Repository, comprising over X entries..." or "A carefully curated and preprocessed dataset of Y medical images, categorized for Z conditions...").
* **Training Process:** The model was developed and trained using \[mention your framework, e.g., TensorFlow/Keras] within a dedicated Python environment. This involved:
    * **Rigorous Data Preprocessing:** Handling missing values, encoding categorical features, and normalizing numerical data.
    * **Feature Engineering:** Crafting relevant features from raw symptom inputs to enhance model performance.
    * **Model Architecture Design:** Selecting and fine-tuning the model's architecture (e.g., a multi-layer perceptron for tabular data, or a Convolutional Neural Network for image data).
    * **Training & Validation:** Iterative training with careful monitoring of validation metrics to prevent overfitting.
* **Optimization for Edge Devices:** The trained model underwent significant optimization, being converted to the lightweight **TensorFlow Lite (.tflite)** format. This crucial step enables efficient **on-device inference** directly within the application, ensuring:
    * **Low Latency:** Near-instant predictions without reliance on constant cloud communication.
    * **Offline Capability:** Functionality even without an internet connection.
    * **Enhanced User Privacy:** Keeping sensitive data processing local to the user's device.
* **Rigorous Evaluation:** Model performance was meticulously evaluated using metrics paramount in healthcare:
    * **Precision, Recall, and F1-score:** To assess the balance between false positives and false negatives.
    * **ROC Curves and AUC:** To understand the model's discriminative power across various thresholds.
    * **Confusion Matrices:** For a detailed breakdown of correct and incorrect classifications.
    This rigorous evaluation ensures the model's reliability and provides insights into its strengths and limitations.


### 🚀 Setup & Installation (Local Development)

To get a local copy of **Arogya Anugraha** up and running for development or testing, follow these steps:

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/matheshvishnu/arogya-anugraha-app.git
    cd arogya-anugraha-app
    ```
2.  **Install Node.js Dependencies:**
    ```bash
    npm install # or yarn install
    ```
3.  **Install Firebase CLI:**
    ```bash
    npm install -g firebase-tools
    ```
4.  **Log in to Firebase:**
    ```bash
    firebase login
    ```
5.  **Initialize Firebase Project (if not already linked):**
    ```bash
    firebase init
    ```
    * Select "Use an existing project" and choose your `arogya-anugraha-app` project.
    * Select the Firebase features you intend to use (e.g., Hosting, Firestore, Functions, Storage).
    * For Hosting, specify your public directory (e.g., `out` or `build` after running `npm run build` for Next.js).
    * Configure as a single-page app (Yes).
    * **Important:** If prompted to set up automatic builds and deploys with GitHub, you can choose 'No' here as this README provides a manual setup for GitHub Actions later.
6.  **Setup Firebase Functions (if applicable):**
    * Navigate into the `functions` directory: `cd functions`
    * Install Node.js dependencies: `npm install`
    * Return to the root: `cd ..`
7.  **Upload Your Trained TFLite Model:**
    * Ensure your custom-trained `.tflite` model file is uploaded to Firebase ML Kit (Custom) via the Firebase Console. Note the "Model name" you assign (e.g., `symptom_classifier_v1`). Your frontend code will download this model at runtime.
8.  **Run the Frontend Application:**
    ```bash
    npm run dev # For Next.js development server
    ```
    (Adjust command based on your specific Next.js setup, e.g., `npm start` for older versions)

### 🖥️ Usage

1.  **Access the Application:** Once the development server is running, open your web browser and navigate to `http://localhost:3000` (or the address provided by your terminal).
2.  **Register/Login:** Create a new user account or log in with your credentials to access the application's features.
3.  **Input Symptoms:** Utilize the intuitive interface to enter your symptoms or relevant health data.
4.  **Get Insights:** Receive preliminary health condition predictions and personalized insights generated by the custom ML model.
5.  **Explore History:** Review your past symptom analysis records to track your health journey.

### ☁️ Deployment: Continuous Delivery with GitHub Actions

**Arogya Anugraha** is set up for automated, continuous deployment to Firebase Hosting, showcasing modern DevOps practices:

1.  **GitHub Repository Connection:** Ensure your project code is pushed to your GitHub repository (`https://github.com/matheshvishnu/arogya-anugraha-app`).
2.  **Firebase Hosting GitHub Integration:**
    * From your Firebase project's console, navigate to the **Hosting** section.
    * Look for the option to **"Connect to GitHub"** or "Set up automatic builds and deploys with GitHub."
    * Follow the guided prompts to authorize Firebase to access your GitHub repository. This process securely establishes a **GitHub Secret** containing a Firebase service account key, enabling GitHub Actions to authenticate and deploy.
    * Firebase will automatically generate a `.github/workflows/` YAML file in your repository, defining the CI/CD pipeline.
3.  **Push Workflow File:** Crucially, ensure this newly generated GitHub Actions workflow file is committed and pushed to your `main` (or `master`) branch on GitHub.
4.  **Automatic Deployment:** From this point onwards, any subsequent pushes to your configured deployment branch will automatically trigger a build and deploy process, updating your live Firebase Hosting site. Furthermore, you can configure **Pull Requests to trigger preview deployments**, offering a powerful way to review changes before merging to production.

### 🛡️ Ethical Considerations & Disclaimers

As a healthcare AI project, **Arogya Anugraha** is built with a strong commitment to ethical AI principles:

* **Non-Diagnostic Tool:** This application is strictly designed for informational and preliminary insight purposes. It is **NOT a substitute for professional medical advice, diagnosis, or treatment.** Users are emphatically advised to consult with qualified healthcare professionals for any health concerns or before making any medical decisions.
* **Data Privacy & Security:** User-provided health data is handled with the utmost care and confidentiality. Data is anonymized where technically feasible, and stored securely using Firebase's robust security features, including strict security rules and access controls. My commitment ensures that no Personally Identifiable Information (PII) is intentionally processed or stored beyond what is absolutely necessary for core application functionality and user experience.
* **Bias Awareness & Mitigation:** The performance of any ML model is inherently dependent on its training data. While significant efforts have been made to curate and preprocess the dataset to mitigate biases, users should be aware that AI models can reflect subtle biases present in their training data. Continuous monitoring of model performance and potential re-training with more diverse data are crucial ongoing considerations for fairness.
* **Transparency & Explainability:** The project strives for transparency regarding its AI capabilities and inherent limitations. While complex models may not offer full interpretability, the aim is to present predictions and insights in a clear, understandable manner.
* **Human Oversight:** This system is fundamentally designed as a *tool to assist and inform*, not to autonomously make critical decisions. It emphasizes the irreplaceable role of human medical expertise and judgment.


### 📧 Contact

For any questions, feedback, or collaborations, please feel free to reach out:

* **GitHub:** [matheshvishnu](https://github.com/matheshvishnu)
