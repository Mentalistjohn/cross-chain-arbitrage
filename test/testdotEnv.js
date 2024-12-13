require("dotenv").config();

async function main() {
  console.log("Infura API Key:", process.env.INFURA_API_KEY);
  console.log("Private Key:", process.env.PRIVATE_KEY);
  console.log("Etherscan API Key:", process.env.ETHERSCAN_API_KEY);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
