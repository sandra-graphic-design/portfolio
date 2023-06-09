import SummaryCard from "../../components/summary-card";
import MyContainer from "../../components/container";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import Head from 'next/head';
import { useTheme } from '@mui/material/styles';
import useTranslation from "../../intl/useTranslation";
import Image from "next/image";
import Article1 from "../../public/assets/magazine-illustrations/article_01.png";
import Article2 from "../../public/assets/magazine-illustrations/article_02.png";
import Article3 from "../../public/assets/magazine-illustrations/article_03.png";
import Article4 from "../../public/assets/magazine-illustrations/article_04.png";
import Article5 from "../../public/assets/magazine-illustrations/article_05.png";
import Article6 from "../../public/assets/magazine-illustrations/article_06.png";
import Article7 from "../../public/assets/magazine-illustrations/article_07.png";
import Illustration1 from "../../public/assets/magazine-illustrations/illustration_01.png";
import Illustration2 from "../../public/assets/magazine-illustrations/illustration_02.png";
import Illustration3 from "../../public/assets/magazine-illustrations/illustration_03.png";
import Illustration4 from "../../public/assets/magazine-illustrations/illustration_04.png";
import Illustration5 from "../../public/assets/magazine-illustrations/illustration_05.png";
import Illustration6 from "../../public/assets/magazine-illustrations/illustration_06.png";
import Illustration7 from "../../public/assets/magazine-illustrations/illustration_06.png";
import ProtectedImage from "../../components/protected-image";
import Layout from '../../components/layout'


export default function MagazineIllustrations() {

    const theme = useTheme();
    const { t } = useTranslation();

    return <Layout><MyContainer>
        <Head>
            <title>Magazine Illustrations</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Container maxWidth="md">
            <SummaryCard
                role="illustrator"
                company="Tot Sant Cugat"
                timeframe="TBD"
                teamstyle="solo_designer"
                tools="Adobe Creative Cloud - Illustrator, Photoshop, After Effects"
            >
            </SummaryCard>
            <br />
            <br />
            <br />
            <Image
                src={Article1}
                alt="Article 1"
                style={{ borderRadius: 4 }}
                placeholder='blur'
                loading="eager"
            >
            </Image>
            <br />
            <br />
            <Image
                src={Article2}
                alt="Article 2"
                style={{ borderRadius: 4 }}
                placeholder='blur'
                loading="eager"
            >
            </Image>
            <br />
            <br />
            <Image
                src={Article3}
                alt="Article 3"
                style={{ borderRadius: 4 }}
                placeholder='blur'
            >
            </Image>
            <br />
            <br />
            <Image
                src={Article4}
                alt="Article 4"
                style={{ borderRadius: 4 }}
                placeholder='blur'
            >
            </Image>
            <br />
            <br />
            <Image
                src={Article5}
                alt="Article 5"
                style={{ borderRadius: 4 }}
                placeholder='blur'
            >
            </Image>
            <br />
            <br />
            <Image
                src={Article6}
                alt="Article 6"
                style={{ borderRadius: 4 }}
                placeholder='blur'
            >
            </Image>
            <br />
            <br />
            <Image
                src={Article7}
                alt="Article 7"
                style={{ borderRadius: 4 }}
                placeholder='blur'
            >
            </Image>
            <br />
            <br />
            <Image
                src={Illustration1}
                alt="Illustration 1"
                style={{ borderRadius: 4 }}
                placeholder='blur'
            >
            </Image>
            <br />
            <br />
            <Image
                src={Illustration2}
                alt="llustration 2"
                style={{ borderRadius: 4 }}
                placeholder='blur'
            >
            </Image>
            <br />
            <br />
            <Image
                src={Illustration3}
                alt="llustration 3"
                style={{ borderRadius: 4 }}
                placeholder='blur'
            >
            </Image>
            <br />
            <br />
            <Image
                src={Illustration4}
                alt="llustration 4"
                style={{ borderRadius: 4 }}
                placeholder='blur'
            >
            </Image>
            <br />
            <br />
            <Image
                src={Illustration5}
                alt="llustration 5"
                style={{ borderRadius: 4 }}
                placeholder='blur'
            >
            </Image>
            <br />
            <br />
            <Image
                src={Illustration6}
                alt="llustration 6"
                style={{ borderRadius: 4 }}
                placeholder='blur'
            >
            </Image>
            <br />
            <br />
            <ProtectedImage
                src={Illustration7.src}
                alt="Coffee 6"
            />
        </Container>
        <Container maxWidth="md">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Typography variant='h3'>{t("thanks_for_reading")}</Typography>
            <br />
            <br />
            <br />
            <br />
        </Container>
    </MyContainer>
    </Layout>
}
