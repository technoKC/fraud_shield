# FraudShield v2.0 - Enhanced with AI and Dual Dashboard

## 🚀 Complete Deployment Guide

### Prerequisites
- Python 3.8 or higher
- Node.js 14 or higher
- npm or yarn
- Git

### 📁 Project Structure
```
fraudShield/
├── backend/
│   ├── data/                    # CSV data files
│   ├── models/                  # AI models
│   │   ├── __init__.py
│   │   └── ai_fraud_detector.py
│   ├── reports/                 # Generated PDF reports
│   ├── static/                  # Logo files
│   │   ├── logo.png            # FraudShield logo
│   │   ├── centralbank.png     # Central Bank logo
│   │   └── manit.png           # MANIT logo
│   ├── fraud_detection.py
│   ├── graph_analyzer.py
│   ├── report_generator.py
│   ├── manit_processor.py
│   ├── main.py
│   └── requirements.txt
│
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   ├── logo.png
│   │   ├── centralbank.png
│   │   └── manit.png
│   ├── src/
│   │   ├── components/
│   │   │   ├── Home.js
│   │   │   ├── Dashboard.js
│   │   │   ├── AdminLogin.js
│   │   │   ├── AdminDashboard.js
│   │   │   ├── ManitLogin.js
│   │   │   ├── ManitDashboard.js
│   │   │   └── NetworkGraph.js
│   │   ├── styles/
│   │   │   └── App.css
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── README.md
└── setup.sh
```

## 🛠️ Installation Steps

### Step 1: Clone or Setup the Project
```bash
# Create project directory
mkdir fraudShield
cd fraudShield
```

### Step 2: Setup Backend

1. Navigate to backend directory:
```bash
cd backend
```

2. Create required directories:
```bash
mkdir -p data reports static models
```

3. Copy logo files to static directory:
```bash
# Copy your logo files (logo.png, centralbank.png, manit.png) to backend/static/
```

4. Create Python virtual environment:
```bash
python -m venv venv
```

5. Activate virtual environment:
- Windows:
  ```bash
  venv\Scripts\activate
  ```
- Linux/Mac:
  ```bash
  source venv/bin/activate
  ```

6. Install Python dependencies:
```bash
pip install -r requirements.txt
```

7. Copy your CSV data file to data directory:
```bash
# Copy anonymized_sample_fraud_txn.csv to backend/data/
```

### Step 3: Setup Frontend

1. Navigate to frontend directory:
```bash
cd ../frontend
```

2. Copy logo files to public directory:
```bash
# Copy your logo files (logo.png, centralbank.png, manit.png) to frontend/public/
```

3. Install Node dependencies:
```bash
npm install
```

## 🚀 Running the Application

### Start Backend Server:
```bash
cd backend
# Activate virtual environment if not already active
python main.py
```
Backend will run on: http://localhost:8000

### Start Frontend Server:
Open a new terminal and run:
```bash
cd frontend
npm start
```
Frontend will run on: http://localhost:3000

## 📝 Usage Guide

### 1. **Home Page**
- Three main action buttons with glow effect:
  - **Upload CSV**: Direct fraud detection
  - **Central Bank Login**: Access admin dashboard
  - **MANIT Login**: Access student loan verification

### 2. **Central Bank Admin**
- Username: `centralbank`
- Password: `admin123`
- Features:
  - Real-time fraud monitoring
  - AI-powered fraud detection
  - Network visualization with zoom/pan
  - Generate PDF reports
  - Block/verify transactions

### 3. **MANIT Admin**
- Username: `manit`
- Password: `bhopal123`
- Features:
  - Student loan verification
  - Department-wise statistics
  - Semester-wise tracking
  - Generate verification reports

### 4. **CSV Formats**

#### Fraud Detection CSV (Central Bank):
- Required columns: TXN_TIMESTAMP, TRANSACTION_ID, AMOUNT, PAYER_VPA, BENEFICIARY_VPA, IS_FRAUD, etc.

#### MANIT Loan CSV:
- Required columns: STUDENT_ID, STUDENT_NAME, TRANSACTION_ID, LOAN_AMOUNT, SEMESTER, DEPARTMENT, TRANSACTION_DATE, BANK_NAME

## 🐳 Docker Deployment (Optional)

Create `docker-compose.yml`:
```yaml
version: '3.8'

services:
  backend:
    build: ./backend
    ports:
      - "8000:8000"
    volumes:
      - ./backend/data:/app/data
      - ./backend/reports:/app/reports
      - ./backend/static:/app/static
    environment:
      - PYTHONUNBUFFERED=1

  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    depends_on:
      - backend
    environment:
      - REACT_APP_API_URL=http://backend:8000
```

Create `backend/Dockerfile`:
```dockerfile
FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

RUN mkdir -p data reports static models

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

Create `frontend/Dockerfile`:
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

Run with Docker:
```bash
docker-compose up --build
```

## 🔧 Configuration

### Environment Variables
Create `.env` file in backend:
```env
# Admin Credentials
CENTRALBANK_USERNAME=centralbank
CENTRALBANK_PASSWORD=admin123
MANIT_USERNAME=manit
MANIT_PASSWORD=bhopal123

# API Settings
API_HOST=0.0.0.0
API_PORT=8000
```

## 🎯 Key Features

### 1. **AI-Powered Fraud Detection**
- Pattern recognition
- Anomaly detection
- Risk scoring (0-100)
- Network analysis
- Real-time processing

### 2. **Enhanced Visualizations**
- Zoom/pan network graphs
- Responsive design
- Interactive controls
- Real-time updates

### 3. **Dual Dashboard System**
- Central Bank fraud monitoring
- MANIT loan verification
- Role-based access
- Custom reports

### 4. **Improved UI/UX**
- Glowing button effects
- Fixed logo sizing
- Blue-themed reports
- Mobile responsive

## 📊 Testing

1. **Test Fraud Detection**:
   - Upload the sample CSV file
   - Check fraud detection results
   - Verify graph visualization

2. **Test Admin Dashboards**:
   - Login to both dashboards
   - Verify data loading
   - Test report generation

3. **Test MANIT Features**:
   - Upload student loan CSV
   - Verify/reject transactions
   - Generate reports

## 🚨 Troubleshooting

### Common Issues:

1. **Backend not starting**:
   - Check Python version (3.8+)
   - Verify all dependencies installed
   - Check port 8000 is available

2. **Frontend not connecting**:
   - Verify backend is running
   - Check CORS settings
   - Clear browser cache

3. **Logos not appearing**:
   - Verify logo files in both `/backend/static/` and `/frontend/public/`
   - Check file names match exactly

4. **Graph not displaying**:
   - Check console for errors
   - Verify data format
   - Try refreshing the page

## 📱 Mobile Deployment

For mobile access:
1. Ensure both frontend and backend are on same network
2. Update API calls to use actual IP instead of localhost
3. Access via: `http://[YOUR-IP]:3000`

## 🔒 Security Notes

- Change default passwords before production
- Use HTTPS in production
- Implement proper authentication
- Regular security audits
- Keep dependencies updated

## 📈 Performance Optimization

- Enable caching for static files
- Compress API responses
- Optimize graph rendering for large datasets
- Use pagination for transaction lists
- Implement lazy loading

## 🎉 Success Indicators

- ✅ All three homepage buttons show glow effect on hover
- ✅ Logos appear correctly sized in header
- ✅ Graphs support zoom/pan functionality
- ✅ Both admin dashboards functional
- ✅ PDF reports generate with logos
- ✅ AI fraud detection shows risk scores

## 📞 Support

For issues or questions:
- Check console logs for errors
- Verify all files are in correct locations
- Ensure all dependencies are installed
- Test with sample data first

---

**FraudShield v2.0** - Powered by AI | Detect • Explain • Protect"# FraudShieldrepo" 
"# FraudShieldrepo" 
