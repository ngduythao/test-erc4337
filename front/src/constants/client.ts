import { createPublicClient, http } from "viem";
import { arbitrumSepolia, sepolia, mainnet } from "viem/chains";

export const CHAIN = {
  ...arbitrumSepolia,
};

export const transport = http(process.env.NEXT_PUBLIC_RPC_ENDPOINT);

export const PUBLIC_CLIENT = createPublicClient({
  chain: arbitrumSepolia,
  transport,
});

export const MAINNET_PUBLIC_CLIENT = createPublicClient({
  chain: mainnet,
  transport: http(),
});
