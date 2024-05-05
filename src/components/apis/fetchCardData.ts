import { axiosInstance } from '@/src/utils/axiosInstance';

const fetchCardData = async () => {
  try {
    const res = await axiosInstance.get('sample/folder');
    return res.data;
  } catch (error) {
    throw new Error(`"Error fetching data:", ${error}`);
  }
};

export default fetchCardData;
