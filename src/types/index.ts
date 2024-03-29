// Common Interfaces
export type IIdArg = number | string | string[] | undefined;

export interface IPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface IApiResponse<T> {
  data: T;
  pagination: IPagination;
}

export interface IImage {
  id: number;
  thumbnail: string;
  small?: string;
  medium?: string;
  large?: string;
}

export interface IAuthor {
  id: number;
  username: string;
}

// User Interfaces
export interface IUser {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  money: number;
  phone: string;
  nickname: string;
  isSeller: boolean;
}

export interface IAddUserValues {
  username: string;
  password: string;
  email: string;
  phone: string;
}
// Product Interfaces
export interface IProduct {
  id: number;
  name: string;
  price: number;
  discountRate: number;
  stock: number;
  description: string;
  images: IImage[];
}

export interface IAddProductValues {
  productName: string;
  option: string;
  price: number;
  discountRate: number;
  stock: number;
  categories: string;
  images: FileList;
  jwt: string;
}

// Review Interfaces
export interface IReview {
  id: number;
  rating: number;
  content: string;
  createdAt: string;
  author: IAuthor;
  image: IImage;
}

export interface IAddReviewValues {
  jwt: string;
  author: number;
  product: string | string[] | undefined;
  rating: number;
  image: FileList;
  content: string;
}

export interface IUpdateReviewValues {
  jwt: string;
  author: number;
  review?: number;
  product: string | string[] | undefined;
  rating: number;
  image: FileList;
  content: string;
}

// Comment Interfaces
export interface IComment {
  id: number;
  content: string;
  createdAt: string;
  author: IAuthor;
}

export interface IAddCommentValues {
  jwt: string;
  author: number;
  review: number;
  content: string;
}

export interface IUpdateCommentValues {
  jwt: string;
  author: number;
  review: number;
  content: string;
  comment: number;
}

// Inquiry Interfaces
export interface IInquiry {
  id: number;
  content: string;
  author: IAuthor;
  answer: IAnswer | null;
  createdAt: string;
}

export interface IAddInquiryValues {
  jwt: string;
  author: number;
  product: number | string | string[] | undefined;
  content: string;
}

export interface IUpdateInquiryValues {
  jwt: string;
  author: number;
  inquiry?: number;
  content: string;
}

// Answer Interfaces
export interface IAnswer {
  id: number;
  content: string;
  createdAt: string;
}

export interface IAddAnswerValues {
  inquiry: string;
  answer: string;
}
