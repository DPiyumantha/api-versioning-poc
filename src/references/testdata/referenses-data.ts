import { Reference, ReferenceEntry } from '../entities/reference.entity';

const generateRandomString = (length: number) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return Array.from({ length }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
};

const generateReferenceEntry = (): ReferenceEntry[] => {
  return Array.from({ length: 5 }, () => ({
    key: generateRandomString(5),
    value: generateRandomString(10),
  }));
};

const testReferenceData: Reference[] = Array.from({ length: 100 }, (_, index) => ({
  displayName: `Reference ${index + 1}`,
  description: `Description for Reference ${index + 1}`,
  data: generateReferenceEntry(),
}));

export { testReferenceData };
