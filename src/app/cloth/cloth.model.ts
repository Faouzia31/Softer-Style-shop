export interface Cloth{
  id?: number;
  name?: string;
  price?: number;
  size?: string;
  link?: string;
  infos?: MoreInfos;
}

export interface MoreInfos{
  status?: boolean;
  category?: string;
  color?: string;
}
