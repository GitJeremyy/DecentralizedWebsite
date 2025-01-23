
# Decentralized Website Hosting with IPFS and Pinata (**THIS IS TEST PROJECT**)

This project demonstrates how to host a decentralized website using [IPFS](https://ipfs.io) and [Pinata](https://www.pinata.cloud). The website is automatically deployed via GitHub Actions whenever changes are pushed to the repository, making it seamless to manage and update content on the IPFS network.


---

## Technologies Used  
- **IPFS**: Peer-to-peer protocol for decentralized file sharing.  
- **Pinata**: IPFS pinning service to ensure file persistence.  
- **Node.js**: JavaScript runtime for executing scripts.  
- **GitHub Actions**: Workflow automation for continuous deployment.  

---

## Project Structure  

```
DecentralizedWebsite/
│
├── .github/workflows/deploy.yml      # GitHub Actions workflow for automating deployments
├── upload.mjs                         # Script to upload files to Pinata
├── package.json                      # Project dependencies and configuration
├── README.md                         # Documentation for the project
```

---

## Prerequisites  
1. **Node.js** installed on your local system.  
2. A **Pinata Account** with an API Key and JWT.  
3. Add the following GitHub Secrets to your repository:  
   - `PINATA_JWT`: Your Pinata JSON Web Token.  

---

## Setup Instructions  

### 1. Clone the Repository  
```bash
git clone https://github.com/<your-username>/DecentralizedWebsite.git
cd DecentralizedWebsite
```

### 2. Install Dependencies  
```bash
npm install
```

### 3. Configure Pinata  
Update the `pinataJwt` field in `upload.mjs` with your Pinata JWT:  
```javascript
const pinata = new PinataSDK({
  pinataJwt: "YOUR_PINATA_JWT_HERE",
  pinataGateway: "example-gateway.mypinata.cloud",
});
```

---

## Deployment Workflow  

### Automated Deployment via GitHub Actions  
1. Push changes to the `main` branch:  
   ```bash
   git add .
   git commit -m "Updated files"
   git push origin main
   ```  
2. GitHub Actions will automatically run the workflow defined in `.github/workflows/deploy.yml`.  
3. The `upload.mjs` script uploads the specified files (here, Testing.txt) to Pinata, and the output IPFS URL is logged in the workflow output.

### Accessing Your Website  
1. Check the GitHub Actions logs for the IPFS URL.  
2. Open the URL in any browser via:  
   - **Default Gateway**: `https://gateway.pinata.cloud/ipfs/<IPFS_HASH>`  
   - **Custom Gateway**: `https://<YOUR_GATEWAY>.mypinata.cloud/ipfs/<IPFS_HASH>`  

---

## License  
This project is licensed under the [MIT License](LICENSE).  

---

Feel free to contribute or report issues in the [issues section](https://github.com/<your-username>/DecentralizedWebsite/issues).  
