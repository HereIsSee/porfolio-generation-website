--@(#) script.ddl

CREATE TABLE AuditAction
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

CREATE TABLE FieldType
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

CREATE TABLE MediaType
(
	id_MediaType integer,
	name char (13) NOT NULL,
	PRIMARY KEY(id_MediaType)
);
INSERT INTO MediaType(id_MediaType, name) VALUES(1, 'AVATAR');
INSERT INTO MediaType(id_MediaType, name) VALUES(2, 'PROJECT_COVER');
INSERT INTO MediaType(id_MediaType, name) VALUES(3, 'IMAGE');
INSERT INTO MediaType(id_MediaType, name) VALUES(4, 'FILE');

CREATE TABLE PaymentAmountType
(
	id_PaymentAmountType integer,
	name char (6) NOT NULL,
	PRIMARY KEY(id_PaymentAmountType)
);
INSERT INTO PaymentAmountType(id_PaymentAmountType, name) VALUES(1, 'FIXED');
INSERT INTO PaymentAmountType(id_PaymentAmountType, name) VALUES(2, 'CUSTOM');

CREATE TABLE PaymentStatus
(
	id_PaymentStatus integer,
	name char (8) NOT NULL,
	PRIMARY KEY(id_PaymentStatus)
);
INSERT INTO PaymentStatus(id_PaymentStatus, name) VALUES(1, 'PENDING');
INSERT INTO PaymentStatus(id_PaymentStatus, name) VALUES(2, 'SUCCESS');
INSERT INTO PaymentStatus(id_PaymentStatus, name) VALUES(3, 'FAILED');
INSERT INTO PaymentStatus(id_PaymentStatus, name) VALUES(4, 'CANCELED');

CREATE TABLE PortfolioPlan
(
	id_PortfolioPlan integer,
	name char (8) NOT NULL,
	PRIMARY KEY(id_PortfolioPlan)
);
INSERT INTO PortfolioPlan(id_PortfolioPlan, name) VALUES(1, 'BASIC');
INSERT INTO PortfolioPlan(id_PortfolioPlan, name) VALUES(2, 'ADVNACED');

CREATE TABLE PortfolioStatus
(
	id_PortfolioStatus integer,
	name char (9) NOT NULL,
	PRIMARY KEY(id_PortfolioStatus)
);
INSERT INTO PortfolioStatus(id_PortfolioStatus, name) VALUES(1, 'DRAFT');
INSERT INTO PortfolioStatus(id_PortfolioStatus, name) VALUES(2, 'PUBLISHED');
INSERT INTO PortfolioStatus(id_PortfolioStatus, name) VALUES(3, 'BLOCKED');

CREATE TABLE Theme
(
	id int,
	name varchar (255),
	version varchar (255),
	isActive boolean,
	PRIMARY KEY(id)
);

CREATE TABLE UserRole
(
	id_UserRole integer,
	name char (5) NOT NULL,
	PRIMARY KEY(id_UserRole)
);
INSERT INTO UserRole(id_UserRole, name) VALUES(1, 'USER');
INSERT INTO UserRole(id_UserRole, name) VALUES(2, 'ADMIN');

CREATE TABLE AppUser
(
	id int,
	email varchar (255),
	passwordHash varchar (255),
	isBlocked boolean,
	createdAt date,
	updatedAt date,
	role integer,
	PRIMARY KEY(id),
	FOREIGN KEY(role) REFERENCES UserRole (id_UserRole)
);

CREATE TABLE AuditLog
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
	FOREIGN KEY(action) REFERENCES AuditAction (id_AuditAction),
	CONSTRAINT actor FOREIGN KEY(fk_User_id) REFERENCES AppUser (id)
);

CREATE TABLE Portfolio
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
	FOREIGN KEY(status) REFERENCES PortfolioStatus (id_PortfolioStatus),
	FOREIGN KEY(plan) REFERENCES PortfolioPlan (id_PortfolioPlan),
	FOREIGN KEY(fk_User_id) REFERENCES AppUser (id)
);

CREATE TABLE UserSession
(
	id int,
	userId int,
	refreshTokenHash varchar (255),
	expiresAt date,
	createdAt date,
	revokedAt date,
	fk_User_id int NOT NULL,
	PRIMARY KEY(id),
	CONSTRAINT has FOREIGN KEY(fk_User_id) REFERENCES AppUser (id)
);

CREATE TABLE ContactInfo
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
	FOREIGN KEY(fk_Portfolio_id) REFERENCES Portfolio (id)
);

CREATE TABLE Education
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
	FOREIGN KEY(fk_Portfolio_id) REFERENCES Portfolio (id)
);

CREATE TABLE Form
(
	id int,
	portfolioId int,
	title varchar (255),
	isPublic boolean,
	createdAt date,
	updatedAt date,
	fk_Portfolio_id int,
	PRIMARY KEY(id),
	FOREIGN KEY(fk_Portfolio_id) REFERENCES Portfolio (id)
);

CREATE TABLE PaymentBlock
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
	FOREIGN KEY(amountType) REFERENCES PaymentAmountType (id_PaymentAmountType),
	FOREIGN KEY(fk_Portfolio_id) REFERENCES Portfolio (id)
);

CREATE TABLE ProfileSection
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
	FOREIGN KEY(fk_Portfolio_id) REFERENCES Portfolio (id)
);

CREATE TABLE Project
(
	id int,
	portfolioId int,
	title varchar (255),
	description varchar (255),
	projectUrl varchar (255),
	repoUrl varchar (255),
	createdAt date,
	updatedAt date,
	fk_Portfolio_id int,
	PRIMARY KEY(id),
	FOREIGN KEY(fk_Portfolio_id) REFERENCES Portfolio (id)
);

CREATE TABLE SectionLayout
(
	id int,
	portfolioId int,
	sectionKey varchar (255),
	orderIndex int,
	isVisible int,
	fk_Portfolio_id int,
	PRIMARY KEY(id),
	FOREIGN KEY(fk_Portfolio_id) REFERENCES Portfolio (id)
);

CREATE TABLE Skill
(
	id int,
	portfolioId int,
	name varchar (255),
	category varchar (255),
	fk_Portfolio_id int,
	PRIMARY KEY(id),
	FOREIGN KEY(fk_Portfolio_id) REFERENCES Portfolio (id)
);

CREATE TABLE ThemeSettings
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
	FOREIGN KEY(fk_Portfolio_id) REFERENCES Portfolio (id),
	FOREIGN KEY(fk_Theme_id) REFERENCES Theme (id)
);

CREATE TABLE WorkExperience
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
	FOREIGN KEY(fk_Portfolio_id) REFERENCES Portfolio (id)
);

CREATE TABLE FormField
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
	FOREIGN KEY(type) REFERENCES FieldType (id_FieldType),
	FOREIGN KEY(fk_Form_id) REFERENCES Form (id)
);

CREATE TABLE FormSubmission
(
	id int,
	formId int,
	visitorEmail varchar (255),
	createdAt date,
	fk_Form_id int NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY(fk_Form_id) REFERENCES Form (id)
);

CREATE TABLE PaymentEvent
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
	FOREIGN KEY(status) REFERENCES PaymentStatus (id_PaymentStatus),
	FOREIGN KEY(fk_PaymentBlock_id) REFERENCES PaymentBlock (id)
);

CREATE TABLE SubmissionAnswer
(
	id int,
	submissionId int,
	fieldId int,
	value varchar (255),
	fk_FormSubmission_id int NOT NULL,
	fk_FormField_id int NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY(fk_FormSubmission_id) REFERENCES FormSubmission (id),
	FOREIGN KEY(fk_FormField_id) REFERENCES FormField (id)
);
