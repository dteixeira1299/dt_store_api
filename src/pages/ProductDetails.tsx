import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonFooter, IonHeader, IonImg, IonPage, IonTitle, IonToolbar, IonGrid, IonCol, IonRow, IonList, IonItem, IonLabel } from '@ionic/react';
import './ProductDetails.css';
import { StoreService } from '../services/store.service';
import React from 'react';
import { RouteComponentProps } from 'react-router';
interface UserDetailPageProps
  extends RouteComponentProps<{
    id: string;
  }> { }

const ProductDetailsPage: React.FC<UserDetailPageProps> = ({ match }) => {
  const [productDetails, setProductDetails] = React.useState({
    albumTitle: "",

    name: "",
    salePrice: "",

    image: "",
    images: [],

    longDescription: "",
    depth: "",
    weight: "",
    width: "",
    manufacturer: "",
    modelNumber: "",
  });
  React.useEffect(() => {
    let m = new StoreService();

    m.getDetails(match.params.id).then(data => {
      console.log(data);
      setProductDetails(data)
    });
  }, []);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{productDetails.albumTitle}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>



          <IonGrid>
            <IonRow>
              <IonCol size="12" size-md="6" className='ion-float-center'>
                <IonImg className='image' src={productDetails.image} />
              </IonCol>
              <IonCol size="12" size-md="6">
                <IonCardHeader>
                  <IonCardTitle>{productDetails.name}</IonCardTitle>
                  <IonCardSubtitle>Price: {productDetails.salePrice} $</IonCardSubtitle>
                </IonCardHeader>
                <IonTitle className='ion-title-desc'>Description:</IonTitle>
                <IonCardContent>
                  {productDetails.longDescription}
                </IonCardContent>
              </IonCol>
            </IonRow>
          </IonGrid>

          <IonTitle className='ion-title-spec'>Specifications:</IonTitle>
          <IonList lines="full">
            <IonItem>
              <IonLabel>Manufacturer:</IonLabel>
              <IonLabel>{productDetails.manufacturer}</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Model Number:</IonLabel>
              <IonLabel>{productDetails.modelNumber}</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Depth:</IonLabel>
              <IonLabel>{productDetails.depth}</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Weight:</IonLabel>
              <IonLabel>{productDetails.weight}</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Width:</IonLabel>
              <IonLabel>{productDetails.width}</IonLabel>
            </IonItem>
          </IonList>

          <IonGrid>
            <IonRow>
              {productDetails.images.map((photo, index) => (
                <IonCol size="6" key={index}>
                  <IonImg src={photo['href']} />
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        </IonCard>
        <IonFooter>Id (from props):{match.params.id}</IonFooter>
      </IonContent>
    </IonPage>
  );
};

export default ProductDetailsPage;
