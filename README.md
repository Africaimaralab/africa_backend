# test_backend
## Installation

<ul dir="auto">
<li>Run <code>npm install</code></li>
</ul>

## Run
<ul dir="auto">
<li>Create PostgreSQL db with settings from <code>\src\config\db.ts</code></li>
<li>Compile <code>npm run build</code></li>
<li>Migrate <code>npm run migrate</code></li>
<li>Start <code>npm run start</code></li>
</ul>


## Test

### Login
Login POST <code>http://127.0.0.1:4001/auth/login/</code>
<li>Input parameters: <code>wallet_id</code> </li>
<li>Output:<br />
  {<br />
    "user": {<br />
        "wallet_id": "12321"<br />
    },<br />
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3YWxsZXRfaWQiOiIxMjExMTExMTExMTExMTExMTExMSIsImlhdCI6MTY1MDI3NzQ0MiwiZXhwIjoxNjUwMzc3NDQyfQ.OwjFrp6GduXAsF76Ft_xf8f58MyoQetq6-n6p9qjGBI",<br />
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3YWxsZXRfaWQiOiIxMjExMTExMTExMTExMTExMTExMSIsImlhdCI6MTY1MDI3NzQ0MiwiZXhwIjoxNjUwMzc3NDQyfQ.F8J_lWrNOhBGa2UCYfpK2zrV-X36MzmAGSMSfR0nCkM"<br />
}<br />
  
  
### Get profile
Get profile info GET <code>http://127.0.0.1:4001/profile/get_profile/</code>
<li>The <code>wallet_id</code> is extracted automatically from the accessToken</li>
<li>Output:<br />
[<br />
    {<br />
        "id": 1,<br />
        "wallet_id": 12321,<br />
        "profile_picture": null,<br />
        "country": "Russia",<br />
        "document_type": "passport",<br />
        "passport_number": "191493",<br />
        "name": "Test",<br />
        "surname": "TestSur",<br />
        "patronymic_name": "TestPatronymic",<br />
        "created_at": "2022-04-18T10:48:17.000Z"<br />
    }<br />
]<br />
  
  
  
 ### Update profile
Update profile info POST <code>http://127.0.0.1:4001/profile/update_profile</code>
<li>The <code>wallet_id</code> is extracted automatically from the accessToken</li>
<li>Input:<br />
Optional parameters:<br />
- profile picture (img in base64)<br />
- country (string)<br />
- document type (string)<br />
- passport_number (string)<br />
- name (string)<br />
- surname (string)<br />
- patronymic name (string)<br />
  
<li>Output: Profile data or "Error".
  
  
</ul>


