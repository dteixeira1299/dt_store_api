import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonFooter, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './ProductDetails.css';
import { StoreService } from '../services/store.service';
import React from 'react';
import { RouteComponentProps } from 'react-router';
interface UserDetailPageProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const ProductDetailsPage: React.FC<UserDetailPageProps> = ({ match }) => {
  const [productDetails, setProductDetails] = React.useState({
    albumTitle: "",
  });
  React.useEffect(() => {
    let m=new StoreService();

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
      {/* <IonContent fullscreen>
        <IonCard>
          <IonImg src={movieDetails.Poster}/>
          <IonCardHeader>
            <IonCardTitle>Director: {movieDetails.Director}</IonCardTitle>
            <IonCardSubtitle>Actors: {movieDetails.Actors}</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            {movieDetails.Plot}
          </IonCardContent>
        </IonCard>
      <IonFooter>Id (from props):{match.params.id}</IonFooter>
      </IonContent> */}
    </IonPage>
  );
};

export default ProductDetailsPage;
