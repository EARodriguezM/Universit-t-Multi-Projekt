USE [W-chter_Data]
GO
INSERT INTO Faculty(Name,Status) VALUES ('Facultad de Ciencias Básicas y de Educación', 1);
INSERT INTO Faculty(Name,Status) VALUES ('Facultad de Bellas Artes', 1);
INSERT INTO Faculty(Name,Status) VALUES ('Facultad de Ciencias de la Salud', 1);
INSERT INTO Faculty(Name,Status) VALUES ('Facultad de Ciencias Administrativas Contables y Económicas', 1);
INSERT INTO Faculty(Name,Status) VALUES ('Facultad de Ingenierías y Tecnologias', 1);
INSERT INTO Faculty(Name,Status) VALUES('Facultad de Derecho, Ciencias Políticas y Sociales', 1);
GO
---------------------------------------------------------------
INSERT INTO Career(CareerId, Name, FacultyId, Status) VALUES ('102932', 'PSICOLOGIA', 6, 1);
INSERT INTO Career(CareerId, Name, FacultyId, Status) VALUES ('106551', 'LICENCIATURA EN ARTES', 2, 1);
INSERT INTO Career(CareerId, Name, FacultyId, Status) VALUES ('106620', 'LICENCIATURA EN EDUCACION FISICA, RECREACION Y DEPORTES', 1, 1);
INSERT INTO Career(CareerId, Name, FacultyId, Status) VALUES ('106693', 'LICENCIATURA EN ESPAÑOL E INGLES', 1, 1);
INSERT INTO Career(CareerId, Name, FacultyId, Status) VALUES ('106874', 'MUSICA', 1, 1);
INSERT INTO Career(CareerId, Name, FacultyId, Status) VALUES ('107036', 'LICENCIATURA EN MATEMATICAS', 1, 1);
INSERT INTO Career(CareerId, Name, FacultyId, Status) VALUES ('107334', 'LICENCIATURA EN LITERATURA Y LENGUA CASTELLANA', 1, 1);
INSERT INTO Career(CareerId, Name, FacultyId, Status) VALUES ('11734', 'LICENCIATURA EN CIENCIAS NATURALES Y EDUCACION AMBIENTAL', 1, 1);
INSERT INTO Career(CareerId, Name, FacultyId, Status) VALUES ('13976', 'ADMINISTRACION DE EMPRESAS', 4, 1);
INSERT INTO Career(CareerId, Name, FacultyId, Status) VALUES ('1706', 'ENFERMERIA', 3, 1);
INSERT INTO Career(CareerId, Name, FacultyId, Status) VALUES ('1708', 'CONTADURIA PUBLICA', 4, 1);
INSERT INTO Career(CareerId, Name, FacultyId, Status) VALUES ('3237', 'INGENIERIA AGROINDUSTRIAL', 5, 1);
INSERT INTO Career(CareerId, Name, FacultyId, Status) VALUES ('5095', 'INGENIERIA DE SISTEMAS', 5, 1);
INSERT INTO Career(CareerId, Name, FacultyId, Status) VALUES ('5244', 'COMERCIO INTERNACIONAL', 4, 1);
INSERT INTO Career(CareerId, Name, FacultyId, Status) VALUES ('6686', 'INSTRUMENTACION QUIRURGICA', 3, 1);
INSERT INTO Career(CareerId, Name, FacultyId, Status) VALUES ('7093', 'ECONOMIA', 4, 1);
INSERT INTO Career(CareerId, Name, FacultyId, Status) VALUES ('7094', 'INGENIERIA AMBIENTAL Y SANITARIA', 5, 1);
INSERT INTO Career(CareerId, Name, FacultyId, Status) VALUES ('7095', 'INGENIERIA DE ELECTRONICA', 5, 1);
INSERT INTO Career(CareerId, Name, FacultyId, Status) VALUES ('7800', 'DERECHO', 6, 1);
INSERT INTO Career(CareerId, Name, FacultyId, Status) VALUES ('8444', 'MICROBIOLOGIA', 3, 1);
INSERT INTO Career(CareerId, Name, FacultyId, Status) VALUES ('9480', 'SOCIOLOGIA', 6, 1);
GO
---------------------------------------------------------------
INSERT INTO Subject(SubjectId, Name, Status) VALUES ('MT104', 'CALCULO DIFERENCIAL', 1);
INSERT INTO Subject(SubjectId, Name, Status) VALUES ('MT301B', 'ALGEBRA LINEAL', 1);
INSERT INTO Subject(SubjectId, Name, Status) VALUES ('MT305B', 'ECUACIONES DIFERENCIALES ORDINARIAS', 1);
INSERT INTO Subject(SubjectId, Name, Status) VALUES ('MT402', 'ECUACIONES DIFERENCIALES', 1);
INSERT INTO Subject(SubjectId, Name, Status) VALUES ('MT403', 'ESTADISTICA DESCRIPTIVA E INFERENCIAL', 1);
INSERT INTO Subject(SubjectId, Name, Status) VALUES ('FS311', 'ELECTROMAGNETISMO', 1);
INSERT INTO Subject(SubjectId, Name, Status) VALUES ('ING301', 'METODOLOGIA DE LA INVESTIGACION', 1);
INSERT INTO Subject(SubjectId, Name, Status) VALUES ('MT304B', 'CALCULO MULTIVARIABLE', 1);
INSERT INTO Subject(SubjectId, Name, Status) VALUES ('MT307B', 'ESTADISTICA DESCRIPTIVA E INFERENCIAL', 1);
GO
---------------------------------------------------------------
INSERT INTO R_CareerSubject(CareerId, SubjectId, Status) VALUES ('5095', 'MT104', 1);
INSERT INTO R_CareerSubject(CareerId, SubjectId, Status) VALUES ('5095', 'MT301B', 1);
INSERT INTO R_CareerSubject(CareerId, SubjectId, Status) VALUES ('5095', 'MT305B', 1);
INSERT INTO R_CareerSubject(CareerId, SubjectId, Status) VALUES ('7094', 'MT305B', 1);
INSERT INTO R_CareerSubject(CareerId, SubjectId, Status) VALUES ('5095', 'MT402', 1);
INSERT INTO R_CareerSubject(CareerId, SubjectId, Status) VALUES ('5095', 'MT403', 1);
INSERT INTO R_CareerSubject(CareerId, SubjectId, Status) VALUES ('7094', 'MT403', 1);
INSERT INTO R_CareerSubject(CareerId, SubjectId, Status) VALUES ('5095', 'FS311', 1);
INSERT INTO R_CareerSubject(CareerId, SubjectId, Status) VALUES ('5095', 'ING301', 1);
INSERT INTO R_CareerSubject(CareerId, SubjectId, Status) VALUES ('5095', 'MT304B', 1);
INSERT INTO R_CareerSubject(CareerId, SubjectId, Status) VALUES ('5095', 'MT307B', 1);
GO
---------------------------------------------------------------
INSERT INTO UserType (UserTypeId, Description, Status) VALUES (1, 'Estudiante', 1);
INSERT INTO UserType (UserTypeId, Description, Status) VALUES (2, 'Profesor', 1);
INSERT INTO UserType (UserTypeId, Description, Status) VALUES (3, 'Jefe de departamento', 1);
INSERT INTO UserType (UserTypeId, Description, Status) VALUES (4, 'Registro y control', 1);
INSERT INTO UserType (UserTypeId, Description, Status) VALUES (5, 'Administrador', 1);
GO