
const Nfts = [];

function ourNFT (Name, info) {
  const nft = {
    name: Name,
    information: info,
  };
  Nfts.push(nft);
};

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs ()  {
  for (let i = 0; i < Nfts.length; i++) {
    console.log("Name: " + Nfts[i].name);
    console.log("information: " + Nfts[i].information);
  }
};

// print the total number of NFTs we have minted to the console
function getTotalSupply () {
  console.log("Number of NFTs: " + Nfts.length);
};

// call your functions below this line
ourNFT("first", "first nft");
ourNFT("second", "Second nft");
ourNFT("third", "third nft");

listNFTs();
getTotalSupply();