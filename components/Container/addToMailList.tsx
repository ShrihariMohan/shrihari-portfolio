import Image from "next/image"
import { motion } from "framer-motion"

import { Alert, Grid, Snackbar } from "@mui/material"
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';

import InputText from "../UI components/inputText"
import PrimaryButton from "../Buttons/primaryButton"
import { links } from "../../constants/contactLinks";
import { useState } from "react";
import { addSubscriber } from "../../services/subscriberService";
import { EmailE } from "../../constants/errors";


function AddToMailList() {

  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleSubscribe = async () => {
    if (email.length === 0) {
      setError(EmailE.EMAIL_REQUIRED)
    } else if (!isValidEmail(email)) {
      setError(EmailE.EMAIL_INVALID)
    }
    else {
      setError("")
      setDisabled(true)
      const res = await addSubscriber(email)
      setDisabled(false)
      setOpen(true)
      setEmail("")
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Grid container justifyContent='center' alignItems='center' className="flex-col-reverse sm:flex-row   sm:p-6 bg-slate-900  min-h-screen">
        <Grid item xs={0} sm={0} md={1} />
        <Grid item xs={12} sm={8} md={5} mb={4} className=" p-4">
          <picture>
            <Image className="hidden" src='/mail_subscriber.svg' height={400} width={400} alt='Subscribe for free articles' />
          </picture>
        </Grid>

        <Grid item xs={12} sm={8} md={5} mb={4} className="p-4 m-4">
          <Grid container>

            <Grid item xs={12} mt={2}>
              <p className="text-4xl leading-snug text-slate-200">
                <span className="mr-2"> Get a </span>
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-teal-700 relative inline-block">
                  <span className="relative text-slate-200"> Free Copy </span>
                </span>
                <span className="ml-2"> to your inbox  </span>
              </p>

            </Grid>

            <Grid item xs={12} mt={3}>
              <Grid container gap={2}>
                <Grid item xs={12} sm={7} >
                  <InputText placeholder="Rick@morty.space" type="email" value={email} border onChange={handleChange} error={error} />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <PrimaryButton text="Subscribe" variant="green" icon={<SubscriptionsOutlinedIcon />} fullWidth onClick={handleSubscribe} disabled={disabled} />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} mt={1}>

              <p className="text-slate-400 mt-4">Hey If you don't want to receive mails from medium you can always
                <span className=" text-slate-400"> follow me  <a href={links.devto} target='_blank' className="text-cyan-500">@Devto</a></span> or
                <span className="text-slate-400"> <a href={links.medium} target='_blank' className="text-cyan-500">@Medium </a></span>.
              </p>
            </Grid>
          </Grid>
        </Grid>

        <Snackbar
          open={open}
          autoHideDuration={4000}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
          <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
            You have been subscribed to the Mailing list 😉
          </Alert>
        </Snackbar>

      </Grid>
    </motion.div >
  )
}


export default AddToMailList