import { useCallback, useEffect } from 'react';
import { axiosInstance } from '../../utils/axiosInstance';
import DEFAULT_FOLDER from '../../constants/folder';
import { useAsync } from '../../hooks/useAsync';
import { format } from 'date-fns/format';
import { getElapsedTime } from '../../utils/getElapsedTime';
import { StringOrNumber } from '../Input/InputType';
import { FolderData, LinkData } from '../Card/Card';

export interface FormattedLinkProps {
  id: StringOrNumber;
  createdAt: string;
  url: string;
  imageSource: string;
  description: string;
  title: string;
}

const mapLinksData = (link: FormattedLinkProps) => {
  const { id, createdAt, url, imageSource, title, description } = link;

  return {
    id,
    url,
    imageSource,
    alt: `${title ?? url}의 대표 이미지`,
    elapsedTime: getElapsedTime(createdAt),
    description: description ?? '',
    createdAt: format(new Date(createdAt), 'yyyy. MM. dd'),
  };
};

const useGetLink = (folderId = DEFAULT_FOLDER.id) => {
  const queryString = folderId === DEFAULT_FOLDER.id ? '' : `?folderId=${folderId}`;
  const getLinks = useCallback(() => axiosInstance.get<LinkData>(`users/4/links${queryString}`), [queryString]);
  const { execute, loading, error, data } = useAsync(getLinks);

  useEffect(() => {
    execute();
  }, [folderId]);

  const mapDataFormat = ({ id, createdAt, url, imageSource, title, description }: LinkData) => ({
    id,
    createdAt,
    imageSource,
    url,
    title,
    description,
  });

  const linksData = Array.isArray(data) ? data.map(mapDataFormat).map(mapLinksData) : [];
  return { execute, loading, error, data: linksData };
};

export default useGetLink;
