import Container from './container'
import { Typography } from '@mui/material'
import useTranslation from '../intl/useTranslation'
import Link from 'next/link'
import { Stack, Button } from '@mui/material'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <div className="py-28 flex flex-col lg:flex-row items-center">
        <Typography variant="h4">{t("sandras_portfolio")}</Typography>
        <br />
        <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
        </div>
        <br />
        <div>
          <Typography variant="caption">© {new Date().getFullYear()} · Sandra Benito Junyent · {t("all_rights_reserved")} </Typography>
          <br />
          <br />
          <Stack direction="row" spacing={2} flexWrap="wrap">
            <Link href="/work/royal-queen-seeds" passHref><Button variant="text" color="secondary">Royal Queen Seeds</Button></Link>
            <Link href="/work/magazine-illustrations" passHref><Button variant="text" color="secondary">Magazine Illustrations</Button></Link>
            <Link href="/work/omonovo-animation" passHref><Button variant="text" color="secondary">Omonovo Animation</Button></Link>
            <Link href="/work/lineart-illustrations" passHref><Button variant="text" color="secondary">Lineart Illustrations</Button></Link>
            <Link href="/work/az-coffee" passHref><Button variant="text" color="secondary">AZ Coffee</Button></Link>
            <Link href="/work/zobeida" passHref><Button variant="text" color="secondary">Zobeida</Button></Link>
            <Link href="/work/patterns" passHref><Button variant="text" color="secondary">Pattern Designs</Button></Link>
          </Stack>
        </div>
      </div>
    </Container>
  )
}

export default Footer
