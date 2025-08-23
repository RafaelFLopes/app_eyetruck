## Para o projeto funcionar adicione esses comandos no terminal

   ```bash
   npm install
   ```
   ```bash
   npx expo start
   ```
   ```bash
   npm install @react-navigation/native
   ```
   ```bash
   npm install @react-navigation/stack
   ```
   ```bash
   npm install react-native-screens
   ```
   ```bash
   npm install react-native-safe-area-context
   ```
    ```bash
   npm install @react-navigation/bottom-tabs
   ```
    ```bash
   npm install @react-native-async-storage/async-storage
   ```
   >  *Após adicionar qualquer comando para importação de alguma ferramenta, é necessário limpar o cache do bundler. adicione o comando:*

   ```bash
   npx expo start -c
   ```

   >  *Comando para adicionar as dependências do banco de dados (Firebase):*
   ```bash
   npm install firebase
   ```

   >  *Comando para customizar o Metro.config.js*
   ```bash
   npx expo customize metro.config.js
   ```
   >  *Configure o Metro.config.js com esse código:*


      const { getDefaultConfig } = require('expo/metro-config');


      const defaultConfig = getDefaultConfig(__dirname);

      
      defaultConfig.resolver.sourceExts.push('cjs');


      module.exports = defaultConfig;


   >  *Configure o tsconfig.json com esse código: após configurar o FirebaseConfig.js*


   {


  "extends": "expo/tsconfig.base",


  "compilerOptions": {


    "strict": true,


    "paths": {


      "@firebase/auth": ["./node_modules/@firebase/auth/dist/index.rn.d.ts"],


      "@/*": [


        "./*"


      ]


    }


  },


  "include": [


    "**/*.ts",


    "**/*.tsx",


    ".expo/types/**/*.ts",


    "expo-env.d.ts"


  ]


}




