PGDMP                         x            fitbook    12.1    12.1                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16780    fitbook    DATABASE     �   CREATE DATABASE fitbook WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'German_Germany.1252' LC_CTYPE = 'German_Germany.1252';
    DROP DATABASE fitbook;
                postgres    false            �            1259    16936    post    TABLE     ;  CREATE TABLE public.post (
    id bigint NOT NULL,
    category character varying(25) NOT NULL,
    content character varying(255) NOT NULL,
    date character varying(255) NOT NULL,
    likes integer NOT NULL,
    list_of_comments bytea,
    title character varying(25) NOT NULL,
    profile_id bigint NOT NULL
);
    DROP TABLE public.post;
       public         heap    postgres    false            �            1259    16934    post_id_seq    SEQUENCE     t   CREATE SEQUENCE public.post_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.post_id_seq;
       public          postgres    false    205                       0    0    post_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.post_id_seq OWNED BY public.post.id;
          public          postgres    false    204            �            1259    16899    profile    TABLE     �  CREATE TABLE public.profile (
    id bigint NOT NULL,
    age integer NOT NULL,
    city character varying(25) NOT NULL,
    country character varying(25) NOT NULL,
    email character varying(255),
    gender character varying(15) NOT NULL,
    password character varying(25) NOT NULL,
    sport character varying(25) NOT NULL,
    username character varying(15) NOT NULL,
    personal_description character varying(200),
    CONSTRAINT profile_age_check CHECK (((age <= 99) AND (age >= 18)))
);
    DROP TABLE public.profile;
       public         heap    postgres    false            �            1259    16897    profile_id_seq    SEQUENCE     w   CREATE SEQUENCE public.profile_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.profile_id_seq;
       public          postgres    false    203                       0    0    profile_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.profile_id_seq OWNED BY public.profile.id;
          public          postgres    false    202            �
           2604    16939    post id    DEFAULT     b   ALTER TABLE ONLY public.post ALTER COLUMN id SET DEFAULT nextval('public.post_id_seq'::regclass);
 6   ALTER TABLE public.post ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    204    205    205            �
           2604    16902 
   profile id    DEFAULT     h   ALTER TABLE ONLY public.profile ALTER COLUMN id SET DEFAULT nextval('public.profile_id_seq'::regclass);
 9   ALTER TABLE public.profile ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    202    203    203                      0    16936    post 
   TABLE DATA           g   COPY public.post (id, category, content, date, likes, list_of_comments, title, profile_id) FROM stdin;
    public          postgres    false    205   m                 0    16899    profile 
   TABLE DATA           y   COPY public.profile (id, age, city, country, email, gender, password, sport, username, personal_description) FROM stdin;
    public          postgres    false    203   ~                  0    0    post_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.post_id_seq', 9, true);
          public          postgres    false    204                       0    0    profile_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.profile_id_seq', 10, true);
          public          postgres    false    202            �
           2606    16944    post post_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.post
    ADD CONSTRAINT post_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.post DROP CONSTRAINT post_pkey;
       public            postgres    false    205            �
           2606    16905    profile profile_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.profile
    ADD CONSTRAINT profile_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.profile DROP CONSTRAINT profile_pkey;
       public            postgres    false    203            �
           2606    16945     post fkk5e5q6qsbobb7sst3h99kjr50    FK CONSTRAINT     �   ALTER TABLE ONLY public.post
    ADD CONSTRAINT fkk5e5q6qsbobb7sst3h99kjr50 FOREIGN KEY (profile_id) REFERENCES public.profile(id);
 J   ALTER TABLE ONLY public.post DROP CONSTRAINT fkk5e5q6qsbobb7sst3h99kjr50;
       public          postgres    false    205    203    2699                 x�]�Ok�0���PN�iq�-mz���2(��bR5	M�b+t���76h/�z?��މdu��j���}�-�G�~bN��za�?]�/�������~7yɠй6��F���|�+�P3�9�G+�c;�*U2���Nx��:6>q��P/J\\CqwN~K/v$������sx�,�a��a n	GJ6-��_b��(�^�� �@�����f���Pch��-V��O�#[�֞��b���6/����$�)�js���.�v�         "  x�m�Ko�@���_��zC%I�܀�T���C%.&qȖ}�ݥ"���!7��|3�$={�۽�0!o�6�Ph�l̡]�Pt�4{����Ze7�}��ՇH �`�^�� �ΰ�n�ܩ�(�C�kV��e<oSܡ�H!��i��͕1�Q�=���X���
aiU�R."2G�JyU ��AU=`�0l)�Qk���F�r�|�Aޞ��5���0o��)��{��rT~��k�テn�.�B+G|c��$�+Q�_j�>$�����u��oL�
?�/%���,U�ZU$Vm!��ː      