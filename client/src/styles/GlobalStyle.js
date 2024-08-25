import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root{
    
  &,&.light-mode{
    .active{
      background-color:var(--color-hover);
    

    }
    
    --color-green-05:#215c64;    
    --color-green-00: #519589;
    --color-green-00-noti: #3b6d64;
    /* --color-green-00:linear-gradient(90deg, rgba(28,53,48,1) 0%, rgba(44,111,99,1) 32%, rgba(81,149,137,1) 54%, rgba(81,149,137,1) 66%, rgba(45,138,122,1) 100%); */
    --color-green-50:#2b747e;
    
      --color-green-100: #cdcdcd;
      --color-green-200: #cdcdcd;
      --color-background:#ffff;
      --color-text:#000;
      --color-input-text:#044965;
      --color-hover: #aab3ad;


      --image-grayscale: 0;
--image-opacity: 100%;
      

}
&.dark-mode{
  
  .sidebar-link-active{
    background-color: var(--color-hover);
  }
  --color-green-05:#277079;
      --color-green-00:#233341;
      --color-green-00-noti:#1d2b36;
      --color-green-50:#2b747e;
      --color-green-100:#2d3937;
      --color-background:#000;
      /* --color-text:#8abdc3; */
      --color-text:#d6f4ff;
      --color-input-text:#022330;
      --color-hover: #aab3ad;


      --image-grayscale: 10%;
--image-opacity: 90%;

    }


    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);
 
  --color-brand-50: #eef2ff;
  --color-brand-100: #e0e7ff;
  --color-brand-200: #c7d2fe;
  --color-brand-500: #6366f1;
  --color-brand-600: #4f46e5;
  --color-brand-700: #4338ca;
  --color-brand-800: #3730a3;
  --color-brand-900: #312e81;

}





body {
  margin: 0;
  padding: 0;
  font-family: 'Dosis', sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-size: 25px;
  color: var(--color-text);
  background-color: var(--color-background);
  transition: color 0.3s, background-color 0.3s;

  ;
}

@media (min-width: 1000px) {
  .tooltip {
    display: none;
  }
}

button:hover {
    background-color: var(--color-hover);
    color:black;
    cursor: pointer;
  }




  *,
*::before,
*::after {
  box-sizing: border-box;
  /* padding: 0;
  margin: 0; */

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}



input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grren-100);
  color: var(--color-green-100);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  /* outline: 2px solid var(--color-green-05); */
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}

`;
export default GlobalStyle;
