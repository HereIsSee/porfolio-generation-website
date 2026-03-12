--@(#) script.ddl

CREATE SCHEMA 2. Class Diagram;

CREATE TABLE 2. Class Diagram.AuditAction
(
	id_AuditAction integer,
	name char (22) NOT NULL,
	PRIMARY KEY(id_AuditAction)
);
INSERT INTO AuditAction(id_AuditAction, name) VALUES(1, 'USER_BLOCK');
INSERT INTO AuditAction(id_AuditAction, name) VALUES(2, 'USER_DELETE');
INSERT INTO AuditAction(id_AuditAction, name) VALUES(3, 'PORTFOLIO_VIEW_PRIVATE');
INSERT INTO AuditAction(id_AuditAction, name) VALUES(4, 'PORTFOLIO_BLOCK');
INSERT INTO AuditAction(id_AuditAction, name) VALUES(5, 'PORTFOLIO_PUBLISH');
INSERT INTO AuditAction(id_AuditAction, name) VALUES(6, 'PORTFOLIO_UNPUBLISH');
INSERT INTO AuditAction(id_AuditAction, name) VALUES(7, 'SUMISSION_DELETE');
INSERT INTO AuditAction(id_AuditAction, name) VALUES(8, 'PAYMENT_STATUS_UPDATE');

CREATE TABLE 2. Class Diagram.FieldType
(
	id_FieldType integer,
	name char (8) NOT NULL,
	PRIMARY KEY(id_FieldType)
);
INSERT INTO FieldType(id_FieldType, name) VALUES(1, 'TEXT');
INSERT INTO FieldType(id_FieldType, name) VALUES(2, 'EMAIL');
INSERT INTO FieldType(id_FieldType, name) VALUES(3, 'TEXTAREA');
INSERT INTO FieldType(id_FieldType, name) VALUES(4, 'SELECT');
INSERT INTO FieldType(id_FieldType, name) VALUES(5, 'CHECKBOX');

CREATE TABLE 2. Class Diagram.MediaType
(
	id_MediaType integer,
	name char (13) NOT NULL,
	PRIMARY KEY(id_MediaType)
);
INSERT INTO MediaType(id_MediaType, name) VALUES(1, 'AVATAR');
INSERT INTO MediaType(id_MediaType, name) VALUES(2, 'PROJECT_COVER');
INSERT INTO MediaType(id_MediaType, name) VALUES(3, 'IMAGE');
INSERT INTO MediaType(id_MediaType, name) VALUES(4, 'FILE');

CREATE TABLE 2. Class Diagram.PaymentAmountType
(
	id_PaymentAmountType integer,
	name char (6) NOT NULL,
	PRIMARY KEY(id_PaymentAmountType)
);
INSERT INTO PaymentAmountType(id_PaymentAmountType, name) VALUES(1, 'FIXED');
INSERT INTO PaymentAmountType(id_PaymentAmountType, name) VALUES(2, 'CUSTOM');

CREATE TABLE 2. Class Diagram.PaymentStatus
(
	id_PaymentStatus integer,
	name char (8) NOT NULL,
	PRIMARY KEY(id_PaymentStatus)
);
INSERT INTO PaymentStatus(id_PaymentStatus, name) VALUES(1, 'PENDING');
INSERT INTO PaymentStatus(id_PaymentStatus, name) VALUES(2, 'SUCCESS');
INSERT INTO PaymentStatus(id_PaymentStatus, name) VALUES(3, 'FAILED');
INSERT INTO PaymentStatus(id_PaymentStatus, name) VALUES(4, 'CANCELED');

CREATE TABLE 2. Class Diagram.PortfolioPlan
(
	id_PortfolioPlan integer,
	name char (8) NOT NULL,
	PRIMARY KEY(id_PortfolioPlan)
);
INSERT INTO PortfolioPlan(id_PortfolioPlan, name) VALUES(1, 'BASIC');
INSERT INTO PortfolioPlan(id_PortfolioPlan, name) VALUES(2, 'ADVNACED');

CREATE TABLE 2. Class Diagram.PortfolioStatus
(
	id_PortfolioStatus integer,
	name char (9) NOT NULL,
	PRIMARY KEY(id_PortfolioStatus)
);
INSERT INTO PortfolioStatus(id_PortfolioStatus, name) VALUES(1, 'DRAFT');
INSERT INTO PortfolioStatus(id_PortfolioStatus, name) VALUES(2, 'PUBLISHED');
INSERT INTO PortfolioStatus(id_PortfolioStatus, name) VALUES(3, 'BLOCKED');

CREATE TABLE 2. Class Diagram.Theme
(
	id int,
	name varchar (255),
	version varchar (255),
	isActive boolean,
	PRIMARY KEY(id)
);

CREATE TABLE 2. Class Diagram.UserRole
(
	id_UserRole integer,
	name char (5) NOT NULL,
	PRIMARY KEY(id_UserRole)
);
INSERT INTO UserRole(id_UserRole, name) VALUES(1, 'USER');
INSERT INTO UserRole(id_UserRole, name) VALUES(2, 'ADMIN');

CREATE TABLE 2. Class Diagram.User
(
	id int,
	email varchar (255),
	passwordHash varchar (255),
	isBlocked boolean,
	createdAt date,
	updatedAt date,
	role integer,
	PRIMARY KEY(id),
	FOREIGN KEY(role) REFERENCES 2. Class Diagram.UserRole (id_UserRole)
);

CREATE TABLE 2. Class Diagram.AuditLog
(
	id int,
	actorUserId int,
	targetType varchar (255),
	targetId int,
	metadataJson varchar (255),
	createdAt date,
	action integer,
	fk_User_id int NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY(action) REFERENCES 2. Class Diagram.AuditAction (id_AuditAction),
	CONSTRAINT actor FOREIGN KEY(fk_User_id) REFERENCES 2. Class Diagram.User (id)
);

CREATE TABLE 2. Class Diagram.Portfolio
(
	id int,
	userId int,
	title varchar (255),
	slug varchar (255),
	createdAt date,
	updatedAt date,
	publishedAt date,
	status integer,
	plan integer,
	fk_User_id int NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY(status) REFERENCES 2. Class Diagram.PortfolioStatus (id_PortfolioStatus),
	FOREIGN KEY(plan) REFERENCES 2. Class Diagram.PortfolioPlan (id_PortfolioPlan),
	FOREIGN KEY(fk_User_id) REFERENCES 2. Class Diagram.User (id)
);

CREATE TABLE 2. Class Diagram.Session
(
	id int,
	userId int,
	refreshTokenHash varchar (255),
	expiresAt date,
	createdAt date,
	revokedAt date,
	fk_User_id int NOT NULL,
	PRIMARY KEY(id),
	CONSTRAINT has FOREIGN KEY(fk_User_id) REFERENCES 2. Class Diagram.User (id)
);

CREATE TABLE 2. Class Diagram.ContactInfo
(
	id int,
	portofioId int,
	email varchar (255),
	phone varchar (255),
	linkedinUrl varchar (255),
	githubUrl varchar (255),
	otherLinksJson varchar (255),
	fk_Portfolio_id int,
	PRIMARY KEY(id),
	UNIQUE(fk_Portfolio_id),
	FOREIGN KEY(fk_Portfolio_id) REFERENCES 2. Class Diagram.Portfolio (id)
);

CREATE TABLE 2. Class Diagram.Education
(
	id int,
	portfolioId int,
	institution varchar (255),
	degree varchar (255),
	field varchar (255),
	startDate date,
	endDate date,
	description varchar (255),
	fk_Portfolio_id int,
	PRIMARY KEY(id),
	FOREIGN KEY(fk_Portfolio_id) REFERENCES 2. Class Diagram.Portfolio (id)
);

CREATE TABLE 2. Class Diagram.Form
(
	id int,
	portfolioId int,
	title varchar (255),
	isPublic boolean,
	createdAt date,
	updatedAt date,
	fk_Portfolio_id int,
	PRIMARY KEY(id),
	FOREIGN KEY(fk_Portfolio_id) REFERENCES 2. Class Diagram.Portfolio (id)
);

CREATE TABLE 2. Class Diagram.PaymentBlock
(
	id int,
	portfolioId int,
	title varchar (255),
	description varchar (255),
	fixedAmount double precision,
	currency varchar (255),
	isEnabled boolean,
	createdAt date,
	updatedAt date,
	amountType integer,
	fk_Portfolio_id int,
	PRIMARY KEY(id),
	FOREIGN KEY(amountType) REFERENCES 2. Class Diagram.PaymentAmountType (id_PaymentAmountType),
	FOREIGN KEY(fk_Portfolio_id) REFERENCES 2. Class Diagram.Portfolio (id)
);

CREATE TABLE 2. Class Diagram.ProfileSection
(
	id int,
	portfolioId int,
	fullName varchar (255),
	headline varchar (255),
	about varchar (255),
	location varchar (255),
	fk_Portfolio_id int,
	PRIMARY KEY(id),
	UNIQUE(fk_Portfolio_id),
	FOREIGN KEY(fk_Portfolio_id) REFERENCES 2. Class Diagram.Portfolio (id)
);

CREATE TABLE 2. Class Diagram.Project
(
	id,
	portfolioId int,
	title varchar (255),
	description varchar (255),
	projectUrl varchar (255),
	repoUrl varchar (255),
	createdAt date,
	updatedAt date,
	fk_Portfolio_id int,
	PRIMARY KEY(id),
	FOREIGN KEY(fk_Portfolio_id) REFERENCES 2. Class Diagram.Portfolio (id)
);

CREATE TABLE 2. Class Diagram.SectionLayout
(
	id int,
	portfolioId int,
	sectionKey varchar (255),
	orderIndex int,
	isVisible int,
	fk_Portfolio_id int,
	PRIMARY KEY(id),
	FOREIGN KEY(fk_Portfolio_id) REFERENCES 2. Class Diagram.Portfolio (id)
);

CREATE TABLE 2. Class Diagram.Skill
(
	id int,
	portfolioId int,
	name varchar (255),
	category varchar (255),
	fk_Portfolio_id int,
	PRIMARY KEY(id),
	FOREIGN KEY(fk_Portfolio_id) REFERENCES 2. Class Diagram.Portfolio (id)
);

CREATE TABLE 2. Class Diagram.ThemeSettings
(
	id int,
	portfolioId int,
	themeId int,
	primaryColor varchar (255),
	secondaryColor varchar (255),
	fontFamily varchar (255),
	buttonStyle varchar (255),
	customCss varchar (255),
	fk_Portfolio_id int,
	fk_Theme_id int NOT NULL,
	PRIMARY KEY(id),
	UNIQUE(fk_Portfolio_id),
	UNIQUE(fk_Theme_id),
	FOREIGN KEY(fk_Portfolio_id) REFERENCES 2. Class Diagram.Portfolio (id),
	FOREIGN KEY(fk_Theme_id) REFERENCES 2. Class Diagram.Theme (id)
);

CREATE TABLE 2. Class Diagram.WorkExperience
(
	id int,
	portfolioId int,
	company varchar (255),
	position varchar (255),
	startDate date,
	endDate date,
	description varchar (255),
	fk_Portfolio_id int,
	PRIMARY KEY(id),
	FOREIGN KEY(fk_Portfolio_id) REFERENCES 2. Class Diagram.Portfolio (id)
);

CREATE TABLE 2. Class Diagram.FormField
(
	id int,
	formId int,
	label varchar (255),
	required boolean,
	optionsJson varchar (255),
	orderIndex int,
	type integer,
	fk_Form_id int NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY(type) REFERENCES 2. Class Diagram.FieldType (id_FieldType),
	FOREIGN KEY(fk_Form_id) REFERENCES 2. Class Diagram.Form (id)
);

CREATE TABLE 2. Class Diagram.FormSubmission
(
	id int,
	formId int,
	visitorEmail varchar (255),
	createdAt date,
	fk_Form_id int NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY(fk_Form_id) REFERENCES 2. Class Diagram.Form (id)
);

CREATE TABLE 2. Class Diagram.PaymentEvent
(
	id int,
	paymentBlockId int,
	amount double precision,
	currency varchar (255),
	createdAt date,
	updatedAt date,
	status integer,
	fk_PaymentBlock_id int,
	PRIMARY KEY(id),
	FOREIGN KEY(status) REFERENCES 2. Class Diagram.PaymentStatus (id_PaymentStatus),
	FOREIGN KEY(fk_PaymentBlock_id) REFERENCES 2. Class Diagram.PaymentBlock (id)
);

CREATE TABLE 2. Class Diagram.SumbmissionAnswer
(
	id int,
	submissionId int,
	fieldId int,
	value varchar (255),
	fk_FormSubmission_id int NOT NULL,
	fk_FormField_id int NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY(fk_FormSubmission_id) REFERENCES 2. Class Diagram.FormSubmission (id),
	FOREIGN KEY(fk_FormField_id) REFERENCES 2. Class Diagram.FormField (id)
);
