import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import 'src/asset/scss/page/Home.scss'

import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation()
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        {t('日本語')}
      </IonContent>
    </IonPage>
  )
}

export default Home
