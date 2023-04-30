import { Injectable } from '@nestjs/common';
import {TranslateDto, TranslationResult} from "./dto";
import e from "express";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const translate = require('@iamtraction/google-translate');

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getTranslate(res: TranslateDto): Promise<TranslationResult> {
    const data = await translate(res.text, {
      to: res.toLanguage,
      from: res.fromLanguage,
    });

    console.log('==========>data', data);
    return {
      translate: data.text,
      fromLanguage: res.fromLanguage,
      toLanguage: res.toLanguage,
    };
  }
}
