{
    type Username = string;
    type Password = string;

    const displayUserName = (u: Username) => `User: ${u}`;

    const pw: Password = "hunter2";

    displayUserName(pw); // valid, but not what we want
}
{
    type Username = string & { type: "Username" };
    type Password = string & { type: "Password" };

    const displayUserName = (u: Username) => `User: ${u}`;

    const pw: Password = "hunter2" as Password;

    displayUserName(pw); // compiler prevents us from misusing sensitive data
}
{
    type Opaque<K, T> = T & {_type: K};

    type Username = Opaque<"Username", string>;
    type Password = Opaque<"Password", string>;

    const displayUserName = (u: Username) => `User: ${u}`;

    const pw: Password = "hunter2" as Password;

    displayUserName(pw); // A-OK!
}