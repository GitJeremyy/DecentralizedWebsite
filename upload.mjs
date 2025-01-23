import { PinataSDK } from "pinata-web3";

const pinata = new PinataSDK({
  pinataJwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIyNTgwN2UyZC00NGQxLTQ4N2YtYWM5ZS0wMGQ1NTM0NTZhNGMiLCJlbWFpbCI6ImplamVtdjc1MTRAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiRlJBMSJ9LHsiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiTllDMSJ9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjI1MGYzZGQ0MzhjMDZhZDNmMjMzIiwic2NvcGVkS2V5U2VjcmV0IjoiNjI4Y2QxODU5YjEyMjRiOGRhNTBmMzFmNmM3NGFkMTIzYTQ0ZjhjNjQ1NDU4NzcyMWQ1Y2U0ZGMzYzFhMjNiOCIsImV4cCI6MTc2OTE3OTA3MX0.3mMJYjaqsF39_Gq-VEmA9vGA5xeQlia9qxpz8GHRjmU",
  pinataGateway: "gateway.pinata.cloud",
});

async function main() {
  try {
    const file = new File(["hello"], "Testing.txt", { type: "text/plain" });
    const upload = await pinata.upload.file(file);
    console.log(upload);
  } catch (error) {
    console.log(error);
  }
}

await main();

// Find content here : https://gateway.pinata.cloud/ipfs/bafkreibm6jg3ux5qumhcn2b3flc3tyu6dmlb4xa7u5bf44yegnrjhc4yeq 
