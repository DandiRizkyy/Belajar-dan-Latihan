  import { Test } from "@nestjs/testing";
  import * as pactum from 'pactum'
  import { AppModule } from "../src/app.module";
  import { INestApplication, ValidationPipe } from "@nestjs/common";
  import { PrismaService } from "../src/prisma/prisma.service";
  import { AuthDto } from "src/auth/dto";
import { inspect } from "util";
import { EditUserDto } from "src/user/dto";
import { CreateBookmarkDto } from "src/bookmark/dto";


  describe('App e2e', () =>{
    let app: INestApplication;
    let prisma: PrismaService;
    beforeAll(async() => {
      const moduleRef = await Test.createTestingModule({
        imports: [AppModule],
      }).compile();

      app = moduleRef.createNestApplication();
      app.useGlobalPipes(new ValidationPipe({
        whitelist: true
      }),
      );
      await app.init();
      await app.listen(3333);

      prisma = app.get(PrismaService);
      await prisma.cleanDb();
      pactum.request.setBaseUrl('http://localhost:3333')
    });
    afterAll(() => {
      app.close();
    });
    
    describe('Auth', () => {
      const dto: AuthDto = {
        email: 'bro94@gmail.com',
        password: '123',
      };
      describe('Signup', () => {
        it('should throw if email empty', () => {
          return pactum.spec().post('/auth/signup').withBody({
            password:dto.password,
          }).expectStatus(400)
        })
        it('should throw if password empty', () => {
          return pactum.spec().post('/auth/signup').withBody({
            password:dto.email,
          }).expectStatus(400)
        })
        it('should throw if no body provided', () => {
          return pactum.spec().post('/auth/signup').expectStatus(400)
        })
        it('should signup', () =>{
          return pactum.spec().post('/auth/signup').withBody(dto).expectStatus(201)
        });
      });
      describe('Signin', () => {
        it('should throw if email empty', () => {
          return pactum.spec().post('/auth/signin').withBody({
            password:dto.password,
          }).expectStatus(400)
        })
        it('should throw if password empty', () => {
          return pactum.spec().post('/auth/signin').withBody({
            password:dto.email,
          }).expectStatus(400)
        })
        it('should throw if no body provided', () => {
          return pactum.spec().post('/auth/signin').expectStatus(400)
        })
        it('should signin', () =>{
          return pactum.spec().post('/auth/signin').withBody(dto).expectStatus(200).inspect().stores('userAt', 'access_token')
        });
      });
    });
    describe('User', () => {
      describe('Get me', () => {
        it('should get current user', () => {
          return pactum.spec().get('/users/me').withHeaders({
            Authorization: 'Bearer $S{userAt}'
          }).expectStatus(200).inspect()
        })
      });
      describe('Edit user', () => {
        it('should edit user', () => {
          const dto: EditUserDto = {
            firstName: 'Bro',
            email: 'bro@codewithbro.com'
          }
          return pactum.spec().patch('/users').withHeaders({
            Authorization: 'Bearer $S{userAt}'
          }).withBody(dto).expectStatus(200).expectBodyContains(dto.firstName).expectBodyContains(dto.email)
        })
      });
    });

    describe('Bookmarks', () => {
      describe('get empty bookmark', () => {
        it('should get bookmarks', () => {
          return pactum.spec().get('/bookmarks').withHeaders({
            Authorization: 'Bearer $S{userAt}'
          }).expectStatus(200).inspect().expectBody([])
        })
      });

      describe('Create bookmark', () => {
        const dto: CreateBookmarkDto = {
          title: "First Bookmark",
          link: "https://youtu.be/GHTA143_b-s",
        }
        it('should create bookmark', () => {
          return pactum.spec().post('/bookmarks').withHeaders({
            Authorization: 'Bearer $S{userAt}'
          }).withBody(dto).expectStatus(201);
        })
      });

      describe('Get bookmark by id', () => {
        it('should get bookmarks', () => {
          return pactum.spec().get('/bookmarks').withHeaders({
            Authorization: 'Bearer $S{userAt}'
          }).expectStatus(200).inspect().expectBody([])
        })
      });
      describe('Edit bookmark by id', () => {});
      describe('Delete bookmark by id', () => {});
    });
  })