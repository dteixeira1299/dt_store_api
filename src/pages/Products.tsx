import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList,IonItem, IonButton, IonSearchbar, IonImg } from '@ionic/react';
import React from 'react';
import './Products.css';
import { StoreService } from '../services/store.service';

const Products: React.FC = () => {

  const [titleSearch, setTitleSearch] = React.useState('');
  const [products, setProducts] = React.useState([{ sku: "", name: "", salePrice: "",thumbnailImage:"" }]);
  const items: any[] = [];  

  React.useEffect(() => {
    let s=new StoreService();
    s.searchData(titleSearch).then(data => setProducts(data.products));

  }, [titleSearch]);
  React.useEffect(() => {
    console.log(products);
  }, [products]);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Products</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Products</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonSearchbar value={titleSearch} onIonChange={e => {
          if (e.detail.value === undefined) return;
          setTitleSearch(e.detail.value!)}}
          ></IonSearchbar>
        <IonList>
          {(products?
            products.map(a => {
              return (
                <IonItem>
                  <IonImg src={a['thumbnailImage']} /> 
                  {a['name']}
                  <IonButton href={'products/'+a['sku']} color="primary" slot="end">Details</IonButton>
                </IonItem>
              );
            }):'')
          }
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Products;
