import React from "react";
import styles from "./styles.module.css";

import { uploads } from "../../utils/config";

//Hooks
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//Redux
import { profile, resetMessage, updateProfile } from "../../slices/userSlice";

import Message from "../../components/Message";

const EditProfile = () => {
  const dispatch = useDispatch();

  const { user, message, error, loading } = useSelector((state) => state.user);

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [bio, setBio] = useState(null);

  //Load user data
  useEffect(() => {
    dispatch(profile());
  }, [dispatch]);

  //Fill form with user data
  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setBio(user.bio);
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      name,
    };

    if (profileImage) {
      userData.profileImage = profileImage;
    }

    if (bio) {
      userData.bio = bio;
    }

    if (password) {
      userData.password = password;
    }

    const formData = new FormData();

    Object.keys(userData).forEach((key) => formData.append(key, userData[key]));

    formData.append("user", formData);

    await dispatch(updateProfile(formData));

    setTimeout(() => {
      dispatch(resetMessage());
    }, 2000);
  };

  const handleFile = (e) => {
    const image = e.target.files[0];

    setPreviewImage(image);

    setProfileImage(image);
  };

  return (
    <div className={styles.edit_profile}>
      <h2>Edite seus dados</h2>
      <p className={styles.subtitle}>
        Adicione uma imagem de perfil e conte mais sobre você...
      </p>
      <form onSubmit={handleSubmit}>
        {(user.profileImage || previewImage) && (
          <img
            className={styles.profile_image}
            src={
              previewImage
                ? URL.createObjectURL(previewImage)
                : `${uploads}/users/${user.profileImage}`
            }
            alt={user.name}
          />
        )}

        <input
          type="text"
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
          value={name || ""}
        />
        <input type="email" placeholder="Email" disabled value={email || ""} />
        <label>
          <span>Imagem do Perfil:</span>
          <input type="file" onChange={handleFile} />
        </label>
        <label>
          <span>Bio:</span>
          <input
            type="text"
            placeholder="Descrição do perfil"
            onChange={(e) => setBio(e.target.value)}
            value={bio || ""}
          />
        </label>
        <label>
          <span>Quer alterar a senha?</span>
          <input
            type="password"
            placeholder="Digite sua nova senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password || ""}
          />
        </label>
        {!loading && <input type="submit" value="Atualizar" />}
        {loading && <input type="submit" value="Aguarde..." disabled />}
        {error && <Message msg={error} type="error" />}
        {message && <Message msg={message} type="success" />}
      </form>
    </div>
  );
};

export default EditProfile;