***** วิธีการ setup  *****
1. เปิดโปรแกรม MySQL Workbench
2. Create schema
   ![image](https://github.com/blink1104/xo_game/assets/98315267/902b7158-115a-4bea-bc55-ff017cd300cc)
3. ตั้งชื่อ schema "xo_game" และกำหนด Collation เป็น utf8-utf8_unicode_ci
   ![image](https://github.com/blink1104/xo_game/assets/98315267/5073a3a1-1082-49f4-81a3-ca71f910daaf)
4. เมื่อสร้างเสร็จจะต้องแสดงขึ้นมาแบบนี้
   ![image](https://github.com/blink1104/xo_game/assets/98315267/7b66f9d0-d92f-47bf-a4b7-c793129ea4f0)

   ***** Run program *****
5. เปิดโปรแกรม Intellij IDEA ขึ้นมา (ในที่นี้ผมใช้ version 2022.1.3)
6. ไปที่เมนู Get form VCS
   ![image](https://github.com/blink1104/xo_game/assets/98315267/7bce35f2-e02f-415f-ad26-5aaffd55d20b)
7. Copy link ในหน้า Git hub
   ![image](https://github.com/blink1104/xo_game/assets/98315267/279c25bd-529f-43df-9c22-90591b47c578)
8. นำ link ที่ copy มาวางในช่อง URL แล้วกด Clone
    ![image](https://github.com/blink1104/xo_game/assets/98315267/7d451c7f-c7a3-41da-ad93-b499ecc98086)
9. ไปที่ Add Configurations
    ![image](https://github.com/blink1104/xo_game/assets/98315267/0452a8e7-6261-4f11-b6e8-99412478e2d1)
10. กด +
    ![image](https://github.com/blink1104/xo_game/assets/98315267/b6a5a099-7586-407b-ab53-3edd674a697c)
11. เลือก Tomcat Server แบบ Local
    ![image](https://github.com/blink1104/xo_game/assets/98315267/43dacb88-b140-490f-b543-46e64d6351ed)
12. ไปที่เมนู Deployment
    ![image](https://github.com/blink1104/xo_game/assets/98315267/43058b29-0b1b-49b4-bc15-85d7fa7ff291)
13. กด + และเลือก Artifact
    ![image](https://github.com/blink1104/xo_game/assets/98315267/85d987f9-e37b-4b80-a318-d9f845005899)
14. เลือก XO_GAME:war exploded
    ![image](https://github.com/blink1104/xo_game/assets/98315267/9b6d4e90-eca6-4366-ad27-7b330b4a8e90)
15. เมื่อเลือกแล้ว ให้กลับไปเมนู Server
    ![image](https://github.com/blink1104/xo_game/assets/98315267/72d7de43-4a33-4e8f-be30-863a721baa8e)
16. กำหนด JRE เป็น Default และกำหนด Http Port แล้วกด OK
    ![image](https://github.com/blink1104/xo_game/assets/98315267/e22ad636-ed38-4209-9dfa-9333eeeaceea)
17. ไปที่ไฟล์ persistance.properties
    ![image](https://github.com/blink1104/xo_game/assets/98315267/1af0dd0f-c272-49dc-959a-1caefb559de4)
18. กำหนดตามนี้
18.1 กำหนด port database mysql workbench
18.2 กำหนดชื่อ schema ให้ตรงกับที่ได้สร้างไว้ตอนต้น (ข้อ 3)
18.3 กำหนด username
18.4 กำหนด password
    ![image](https://github.com/blink1104/xo_game/assets/98315267/bf027cac-f74e-4254-a754-a23ca8d75df7)
    ![image](https://github.com/blink1104/xo_game/assets/98315267/e3a7f4a5-4d2a-4c2a-8031-29df6377d408)
19. จากนั้นกด Run Program
    ![image](https://github.com/blink1104/xo_game/assets/98315267/1cbc47b7-4ed6-46dc-929c-e666c77cb44f)
20. หลังจากกด Run กลับไปดู schema ที่ได้สร้างขึ้นไว้ใน MySql Workbench ให้กด Refresh 1 ครั้ง แล้วจะมีตาราง xo แสดงขึ้นมา 1 ตาราง (เพราะสร้างตารางแบบ Hibernate)
    ![image](https://github.com/blink1104/xo_game/assets/98315267/b73f4d1d-2e1b-4c0f-80f7-4ecfbad3d6e0)
21. หน้าเว็บไซต์
    ![image](https://github.com/blink1104/xo_game/assets/98315267/0008d148-4ab1-45f0-9fc5-24753860ffc8)

วิธีออกแบบโปรแกรม
algorithm ที่ใช้
