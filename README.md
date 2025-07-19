MediScan: Intelligent Symptom Analysis & Personalized Health Pathways
Repository: arogya-anugraha-app
Overview
MediScan is a cutting-edge healthcare application developed as a final year project for Computer Science and Engineering. It leverages custom-trained Machine Learning models and a robust Firebase backend to provide users with preliminary, data-driven insights into potential health conditions based on their reported symptoms and health information. The application aims to empower individuals with better health awareness and guide them towards proactive health management, all while prioritizing user privacy and responsible AI practices.

This project showcases a full-stack development approach, integrating a custom ML pipeline with a scalable cloud infrastructure.

Problem Statement
In today's information-rich but often overwhelming digital landscape, individuals frequently face challenges in accurately interpreting their symptoms or understanding complex health information. This can lead to anxiety, delayed medical consultation, or misinformed self-diagnosis. MediScan addresses this by offering an accessible, preliminary analysis tool that educates users about potential health conditions, acting as a supportive resource rather than a diagnostic replacement.

Features
Secure User Authentication: Seamless and secure user registration and login using email/password and Google Sign-In.

Personalized Health Profiles: Users can create and manage profiles, storing basic anonymized health metrics (e.g., age, gender) and historical symptom entries.

Intuitive Symptom Input: A user-friendly interface for inputting symptoms, potentially including text descriptions or selections from a curated list.

Custom ML-Powered Analysis: Utilizes a custom-trained Machine Learning model to analyze reported symptoms and suggest potential health conditions with confidence scores.

Personalized Health Insights: Provides concise, easy-to-understand explanations of predicted conditions and offers general, non-diagnostic health recommendations.

Symptom History Tracking: Allows users to review their past symptom entries and corresponding predictions.

Scalable Backend: Leverages Firebase services for real-time data storage, secure file management, and serverless logic.

Responsive User Interface: A modern, intuitive, and responsive design ensuring a seamless experience across various devices (web/mobile).

Continuous Deployment: Automated deployment pipeline using GitHub Actions to Firebase Hosting, ensuring the latest updates are always available.

Technology Stack
Frontend: Next.js, TypeScript, CSS (developed within Firebase Studio)

Backend & Cloud Services (Firebase):

Authentication: Firebase Authentication

Database: Cloud Firestore (for structured user data, symptom logs, historical predictions)

Storage: Firebase Cloud Storage (for potential image uploads, ML model files)

Serverless Logic: Firebase Cloud Functions (for data processing, notifications, or complex ML inference orchestration)

Hosting: Firebase Hosting (for web application deployment)

Analytics & Monitoring: Firebase Analytics, Performance Monitoring, Crashlytics

Machine Learning:

Model Development: Python (TensorFlow/Keras, scikit-learn, Pandas, NumPy)

Model Deployment: TensorFlow Lite (.tflite) via Firebase ML Kit (Custom Model Deployment)

Machine Learning Details
At the heart of MediScan is a custom-built Machine Learning model, demonstrating a comprehensive understanding of the ML lifecycle:

Model Type: A classification model designed to predict potential health conditions.

Dataset: (Specify your chosen dataset here, e.g., "A publicly available symptom-disease dataset from UCI Machine Learning Repository" or "A simulated dataset of common symptoms and their associated non-critical conditions.")

Training Process: The model was trained using [mention your framework, e.g., TensorFlow/Keras] in a Python environment. It involved [briefly mention key steps like data preprocessing, feature engineering, model architecture, and training epochs].

Optimization: The trained model is converted to the lightweight TensorFlow Lite (.tflite) format, enabling efficient on-device inference within the application. This ensures low latency, offline capability, and enhanced user privacy.

Evaluation: Model performance was rigorously evaluated using metrics critical for healthcare applications, including Precision, Recall, F1-score, and Confusion Matrices, to ensure reliability and identify areas for improvement.

Architecture
The application follows a modern, serverless-first architecture:

+-------------------+       +-------------------------------------------------+
|                   |       |                 Firebase Cloud                  |
|     Frontend      |       |                                                 |
| (Next.js / React) |       | +-------------------+  +--------------------+ |
|                   |       | | Firebase          |  | Firebase ML Kit    | |
|  - User Interface |       | | Authentication    |  | (Custom Models)    | |
|  - Symptom Input  |       | |                   |  |                    | |
|  - TFLite Inference|------>| - User Auth       |  | - Hosts .tflite    | |
|                   |       | | - User Profiles   |  |   models           | |
+-------------------+       | +-------------------+  | - Model Downloader | |
          |                 |                        +--------------------+ |
          |                 | +-------------------+  +--------------------+ |
          |                 | | Cloud Firestore   |  | Cloud Functions    | |
          |                 | |                   |  | (Node.js/Python)   | |
          |---------------->| - Symptom Logs    |  | - Data Pre/Post-   | |
          |                 | - Predictions     |  |   processing (if needed)|
          |                 | - User Data       |  | - Notifications    | |
          |                 | +-------------------+  | - Orchestration    | |
          |                 |                        +--------------------+ |
          |                 | +-------------------+  +--------------------+ |
          |                 | | Cloud Storage     |  | Firebase Hosting   | |
          |                 | |                   |  |                    | |
          |---------------->| - ML Model Files  |  | - Serves Frontend  | |
          |                 | - User Images     |  |   Assets           | |
          |                 | +-------------------+  +--------------------+ |
          |                 |                                                 |
          +-------------------------------------------------------------------+

Setup & Installation (Local Development)
To get a local copy of this project up and running, follow these steps:

Clone the Repository:

git clone https://github.com/matheshvishnu/arogya-anugraha-app.git
cd arogya-anugraha-app

Install Node.js Dependencies:

npm install # or yarn install

Install Firebase CLI:

npm install -g firebase-tools

Log in to Firebase:

firebase login

Initialize Firebase Project (if not already linked):

firebase init

Follow the prompts:

Select "Use an existing project" and choose your arogya-anugraha-app project.

Select features you intend to use (Hosting, Firestore, Functions, Storage).

For Hosting, specify your public directory (e.g., out or build after running npm run build).

Configure as a single-page app (Yes).

Crucially, if prompted to set up automatic builds/deploys with GitHub, you can choose 'No' here as you'll manage that manually via GitHub Actions later or directly through the Firebase Console's GitHub integration.

Setup Firebase Functions (if applicable):

Navigate into the functions directory: cd functions

Install Node.js dependencies: npm install

Return to the root: cd ..

Place Your Trained TFLite Model:

Ensure your custom-trained .tflite model file is uploaded to Firebase ML Kit (Custom) via the Firebase Console. Note the "Model name" you assign (e.g., symptom_classifier_v1).

Your frontend code will download this model at runtime.

Run the Frontend Application:

npm run dev # For Next.js development server

(Adjust command based on your specific Next.js setup, e.g., npm start for older versions)

Usage
Access the Application: Open your browser and navigate to http://localhost:3000 (or the address provided by npm run dev).

Register/Login: Create a new user account or log in with existing credentials.

Input Symptoms: Use the provided interface to enter symptoms or health data.

Get Insights: Receive preliminary health condition predictions and personalized insights from the custom ML model.

Explore History: View your past symptom analysis records.

Deployment (Continuous Deployment with GitHub Actions)
This project is configured for automated deployment to Firebase Hosting via GitHub Actions:

GitHub Repository Setup: Ensure your project code is pushed to your GitHub repository (https://github.com/matheshvishnu/arogya-anugraha-app).

Firebase Hosting GitHub Integration:

In your Firebase project, go to Hosting.

Click "Get started" or "Add custom domain" if already set up.

Look for the option to "Connect to GitHub" or "Set up automatic builds and deploys with GitHub."

Follow the prompts to authorize Firebase to access your GitHub repository. This will automatically create a GitHub Secret with a Firebase service account key, allowing GitHub Actions to deploy.

It will also generate a .github/workflows/ YAML file in your repository.

Push Workflow File: Ensure this generated workflow file is committed and pushed to your main (or master) branch on GitHub.

Automatic Deployment: Any subsequent pushes to the configured branch will automatically trigger a build and deploy process, updating your live Firebase Hosting site. Pull Requests will also trigger preview deployments if configured.

Ethical Considerations & Disclaimers
As a healthcare AI project, MediScan adheres to the following ethical principles:

Non-Diagnostic Tool: This application is strictly for informational and preliminary insight purposes. It is NOT a substitute for professional medical advice, diagnosis, or treatment. Users are always advised to consult with qualified healthcare professionals for any health concerns.

Data Privacy: User-provided health data is handled with utmost care. Data is anonymized where possible, and stored securely using Firebase's robust security features and access controls. No Personally Identifiable Information (PII) is intentionally processed or stored beyond what is necessary for core application functionality and user experience.

Bias Awareness: The ML model's performance is dependent on the training data. Efforts have been made to mitigate biases, but users should be aware that AI models can reflect biases present in their training data. Continuous monitoring and potential re-training are crucial for fairness.

Transparency: The project aims to be transparent about its AI capabilities and limitations.

Contributing
Contributions are welcome! If you find a bug or have a feature suggestion, please open an issue or submit a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Contact
For any questions or feedback, feel free to reach out:

GitHub: matheshvishnu
