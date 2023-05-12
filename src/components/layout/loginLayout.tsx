import nlearnLogo from '../../../public/images/nLearn logo color.svg';
import styles from './styles.module.css';
import Image from 'next/image';
import Button from '../atoms/button';
import { useRouter } from 'next/router';
export default function LoginLayout(){
    const router = useRouter()
    const handleLoginBtn = () => {
        router.push("./login");
      };
    return(
        <>
        {/* <div className={styles.layoutDiv1}> */}
          <div className={styles.layoutDiv2}>
            <Image src={nlearnLogo} alt="nlearn logo" />

            {router.pathname != "/login" && router.pathname != "/" && (
              <Button
                label="login"
                onClick={handleLoginBtn}
                className={styles.loginBtn}
              />
            )}
          </div>
        {/* </div> */}
        </>
    )
}