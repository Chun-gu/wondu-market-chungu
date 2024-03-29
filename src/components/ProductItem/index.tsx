import Link from "next/link";
import { CustomImage } from "@components";
import { IProduct } from "@types";
import { ImageWrapper } from "@utils";
import { COLOR } from "@styles/color";
import * as Styled from "./styled";

const ProductItem = ({ ...product }: IProduct) => {
  const { images, price, discountRate } = product;
  const currentPrice = (price * ((100 - discountRate) / 100)).toLocaleString();

  return (
    <Link href={{ pathname: "/products/[id]", query: { id: product.id } }}>
      <a>
        <ImageWrapper
          width={38}
          height={38}
          borderRadius={1}
          borderColor={COLOR.greyC4}
        >
          <CustomImage
            src={images[0]?.small}
            objectFit="cover"
            priority={true}
            alt={`${product.name}의 사진`}
            fallback="/assets/images/img-product-fallback.png"
          />
        </ImageWrapper>
        <Styled.Name className="ellipsis-single">{product.name}</Styled.Name>
        <Styled.Price>
          {discountRate > 0 ? (
            <>
              <Styled.CurrentPrice>
                {currentPrice}
                <span>원</span>
              </Styled.CurrentPrice>
              <Styled.OriginalPrice>{price}원</Styled.OriginalPrice>
              <Styled.DiscountRate>{discountRate}%</Styled.DiscountRate>
            </>
          ) : (
            <Styled.CurrentPrice>
              {currentPrice}
              <span>원</span>
            </Styled.CurrentPrice>
          )}
        </Styled.Price>
      </a>
    </Link>
  );
};

export default ProductItem;
