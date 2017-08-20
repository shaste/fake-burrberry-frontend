import React from 'react';
import styled from 'styled-components';

import { Helmet } from 'react-helmet';
import CategoryHeader from './CategoryHeader';
import Card from '../Card';
import Divider from '../../Common/Divider';
import ShowMore from './ShowMore';

const Subcategory = styled.section`
  padding-top: 2rem;
  padding-bottom: 1rem;

  @media all and (min-width: 48rem) {
    padding-top: 4rem;
    padding-bottom: 2rem;
  }
`;

const Subtitle = styled.h2`
  margin-top: 0;
  margin-bottom: 1rem;
  font-family: "Lora";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.1875;

  @media all and (min-width: 48rem) {
    margin-bottom: 2rem;
    font-size: 1.25rem;
    line-height: 1.2;
  }
`;

const ListDivider = Divider.extend`
  margin-bottom: 1rem;

  @media all and (min-width: 48rem) {
    margin: 0;
  }
`;

export default () =>
  (<main>
    <Helmet>
      <title>Men - Burberry</title>
    </Helmet>
    <CategoryHeader />
    <div className="container">
      <Subcategory>
        <Subtitle>Heritage Trench Coats</Subtitle>
        <div className="row">
          <div className="col-xs-6 col-md-3">
            <Card
              to="/men/clothing/product-simple"
              label="Relaxed fit"
              img="https://assets.burberry.com/is/image/Burberryltd/995466e7e1113f3b2f6484ceb090072e1c9062dc.jpg?$BBY_V2_ML_3X4$&hei=960&wid=720"
              title="The Westminster – Long Heritage Trench Coat"
              colorAmount={3}
              price={120000}
              currency="RUB"
            />
          </div>
          <div className="col-xs-6 col-md-3">
            <Card
              to="/men/clothing/product-simple"
              label="Toilered fit"
              img="https://assets.burberry.com/is/image/Burberryltd/90dd344122ccf1884fce63c4fc775bd6baa7a11f.jpg?$BBY_V2_ML_3X4$&hei=960&wid=720"
              title="The Kensington – Mid-Length Heritage Trench Coat"
              colorAmount={4}
              price={110000}
              currency="RUB"
            />
          </div>
          <div className="col-xs-6 col-md-3">
            <Card
              to="/men/clothing/product-simple"
              label="Slim fit"
              img="https://assets.burberry.com/is/image/Burberryltd/fb6adea94455f2a73e97b5cf2d7811d9135dcbe2.jpg?$BBY_V2_ML_3X4$&hei=960&wid=720"
              title="The Sandringham – Mid-length Heritage Trench Coat"
              colorAmount={3}
              price={100000}
              currency="RUB"
            />
          </div>
          <div className="col-xs-6 col-md-3">
            <Card
              to="/men/clothing/product-simple"
              label="Relaxed fit"
              img="https://assets.burberry.com/is/image/Burberryltd/a2fa084eae958434c326685fc8ff19dfce9fe430.jpg?$BBY_V2_ML_3X4$&hei=960&wid=720"
              title="The Westminster – Long Heritage Trench Coat"
              colorAmount={1}
              price={120000}
              currency="RUB"
            />
          </div>
          <div className="col-xs-6 col-md-3">
            <Card
              to="/men/clothing/product-simple"
              label="Relaxed fit"
              img="https://assets.burberry.com/is/image/Burberryltd/f1cdf8b71c19df8d42ed3ea90712c391e6823635.jpg?$BBY_V2_ML_3X4$&hei=960&wid=720"
              title="The Westminster – Long Heritage Trench Coat"
              colorAmount={3}
              price={120000}
              currency="RUB"
            />
          </div>
          <div className="col-xs-6 col-md-3">
            <Card
              to="/men/clothing/product-simple"
              label="Toilered fit"
              img="https://assets.burberry.com/is/image/Burberryltd/23b186def7725e3d4ce4745374ebf11267ed68ed.jpg?$BBY_V2_ML_3X4$&hei=960&wid=720"
              title="The Kensington – Mid-Length Heritage Trench Coat"
              colorAmount={4}
              price={110000}
              currency="RUB"
            />
          </div>
          <div className="col-xs-6 col-md-3">
            <Card
              to="/men/clothing/product-simple"
              label="Slim fit"
              img="https://assets.burberry.com/is/image/Burberryltd/c89a32c4e94178be2d833b9a3d434fa6087d1f25.jpg?$BBY_V2_ML_3X4$&hei=960&wid=720"
              title="The Sandringham – Mid-length Heritage Trench Coat"
              colorAmount={3}
              price={100000}
              currency="RUB"
            />
          </div>
          <div className="col-xs-6 col-md-3">
            <Card
              to="/men/clothing/product-simple"
              label="Relaxed fit"
              img="https://assets.burberry.com/is/image/Burberryltd/f3e96bbcf8fa0aca509c9f5933110b8596d4f06e.jpg?$BBY_V2_ML_3X4$&hei=960&wid=720"
              title="The Westminster – Long Heritage Trench Coat"
              colorAmount={1}
              price={120000}
              currency="RUB"
            />
          </div>
        </div>
      </Subcategory>

      <ListDivider />

      <Subcategory>
        <Subtitle>Single Breasted Trench Coats</Subtitle>
        <div className="row">
          <div className="col-xs-6 col-md-3">
            <Card
              to="/men/clothing/product-simple"
              label="Online Exclusive"
              img="https://assets.burberry.com/is/image/Burberryltd/70d0ea20f4faa00e90a0e70fed88af9cd4874824.jpg?$BBY_V2_ML_3X4$&hei=960&wid=720"
              title="The Brighton – Longline Car Coat"
              colorAmount={7}
              price={120000}
              currency="RUB"
            />
          </div>
          <div className="col-xs-6 col-md-3">
            <Card
              to="/men/clothing/product-simple"
              label="New in"
              img="https://assets.burberry.com/is/image/Burberryltd/32792b6c9cf40c27ce446864bc6bae457d490199.jpg?$BBY_V2_ML_3X4$&hei=960&wid=720"
              title="The Brighton – Longline Car Coat"
              colorAmount={7}
              price={110000}
              currency="RUB"
            />
          </div>
          <div className="col-xs-6 col-md-3">
            <Card
              to="/men/clothing/product-simple"
              label="New in"
              img="https://assets.burberry.com/is/image/Burberryltd/0c526ecde3443d15c60f660214d320ca4c338c88.jpg?$BBY_V2_ML_3X4$&hei=960&wid=720"
              title="The Brighton – Longline Car Coat"
              colorAmount={7}
              price={100000}
              currency="RUB"
            />
          </div>
          <div className="col-xs-6 col-md-3">
            <Card
              to="/men/clothing/product-simple"
              label="Online Exclusive"
              img="https://assets.burberry.com/is/image/Burberryltd/98f1a84f2c171dfc4ffe373e13f5c258e4b79ea9.jpg?$BBY_V2_ML_3X4$&hei=960&wid=720"
              title="The Brighton – Longline Car Coat"
              colorAmount={7}
              price={120000}
              currency="RUB"
            />
          </div>
          <div className="col-xs-6 col-md-3">
            <Card
              to="/men/clothing/product-simple"
              label="New in"
              img="https://assets.burberry.com/is/image/Burberryltd/3bbc6df8655e77f5a75880f03c3ab3f7c92d2ee9.jpg?$BBY_V2_ML_3X4$&hei=960&wid=720"
              title="The Camden – Mid-length Car Coat"
              colorAmount={7}
              price={120000}
              currency="RUB"
            />
          </div>
          <div className="col-xs-6 col-md-3">
            <Card
              to="/men/clothing/product-simple"
              label="New in"
              img="https://assets.burberry.com/is/image/Burberryltd/b340592f566593645f37fd61fdafe720e2c224b7.jpg?$BBY_V2_ML_3X4$&hei=960&wid=720"
              title="The Camden – Mid-length Car Coat"
              colorAmount={7}
              price={110000}
              currency="RUB"
            />
          </div>
          <div className="col-xs-6 col-md-3">
            <Card
              to="/men/clothing/product-simple"
              label="New in"
              img="https://assets.burberry.com/is/image/Burberryltd/746fc06ca713d953b757e6e36fcc68efba116198.jpg?$BBY_V2_ML_3X4$&hei=960&wid=720"
              title="The Camden – Mid-length Car Coat"
              colorAmount={7}
              price={100000}
              currency="RUB"
            />
          </div>
          <div className="col-xs-6 col-md-3">
            <Card
              to="/men/clothing/product-simple"
              label="New in"
              img="https://assets.burberry.com/is/image/Burberryltd/1297c5d67c810e003eed53e02959843669f1ce9c.jpg?$BBY_V2_ML_3X4$&hei=960&wid=720"
              title="The Camden – Mid-length Car Coat"
              colorAmount={7}
              price={120000}
              currency="RUB"
            />
          </div>
        </div>
      </Subcategory>
      <ShowMore />
    </div>
  </main>);
