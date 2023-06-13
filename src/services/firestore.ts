import axios from 'axios';
import { app } from './firebase';
import { SHA256 } from 'crypto-js';
import {
  collection,
  doc,
  getFirestore,
  query,
  where
} from 'firebase/firestore';

export const firestore = getFirestore(app);

export const visitorsRef = doc(firestore, 'counters', 'visitors');
export const usersRef = collection(firestore, 'counters', 'visitors', 'users');
export const searchQuery = (hashedAddress: string) =>
  query(usersRef, where('userAddress', '==', hashedAddress));

export const getHash = async () => {
  const { data } = await axios.get('https://jsonip.com/');
  const hashedAddress = await hashAddress(data.ip);
  return hashedAddress;
};

export const hashAddress = async (address: string) => {
  const hash = SHA256(address);
  return hash.toString();
};
