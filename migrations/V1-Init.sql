-- Table: netflix_service.access_tracking

-- DROP TABLE IF EXISTS netflix_service.access_tracking;

CREATE TABLE IF NOT EXISTS netflix_service.access_tracking
(
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    accessor_id character varying(512) COLLATE pg_catalog."default" NOT NULL,
    object_type character varying(215) COLLATE pg_catalog."default" NOT NULL,
    object_id character varying(512) COLLATE pg_catalog."default" NOT NULL,
    operation character varying(128) COLLATE pg_catalog."default" NOT NULL,
    "timestamp" timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT access_tracking_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS netflix_service.access_tracking
    OWNER to postgres;

COMMENT ON TABLE netflix_service.access_tracking
    IS 'Provides history on object access and operation.';

COMMENT ON COLUMN netflix_service.access_tracking.accessor_id
    IS 'The fully qualified id of a user or system process.';

COMMENT ON COLUMN netflix_service.access_tracking.object_type
    IS 'A fully qualified object type, provided by the tracking system';

COMMENT ON COLUMN netflix_service.access_tracking.operation
    IS 'An operation, provided by the tracking system. This can mean "view" has different meanings based on providing system.';
-- Index: access_tracking_accessor_id

-- DROP INDEX IF EXISTS netflix_service.access_tracking_accessor_id;

CREATE INDEX IF NOT EXISTS access_tracking_accessor_id
    ON netflix_service.access_tracking USING btree
    (accessor_id COLLATE pg_catalog."default" ASC NULLS LAST)
    TABLESPACE pg_default;
-- Index: access_tracking_accessor_operations

-- DROP INDEX IF EXISTS netflix_service.access_tracking_accessor_operations;

CREATE INDEX IF NOT EXISTS access_tracking_accessor_operations
    ON netflix_service.access_tracking USING btree
    (accessor_id COLLATE pg_catalog."default" ASC NULLS LAST, operation COLLATE pg_catalog."default" ASC NULLS LAST, object_type COLLATE pg_catalog."default" ASC NULLS LAST)
    TABLESPACE pg_default;

COMMENT ON INDEX netflix_service.access_tracking_accessor_operations
    IS 'Provides optimized access based on who did what, to what type, and when';
-- Index: access_tracking_object_type_operation

-- DROP INDEX IF EXISTS netflix_service.access_tracking_object_type_operation;

CREATE INDEX IF NOT EXISTS access_tracking_object_type_operation
    ON netflix_service.access_tracking USING btree
    (operation COLLATE pg_catalog."default" ASC NULLS LAST, object_type COLLATE pg_catalog."default" ASC NULLS LAST)
    TABLESPACE pg_default;

-- Table: netflix_service.saved_objects

-- DROP TABLE IF EXISTS netflix_service.saved_objects;

CREATE TABLE IF NOT EXISTS netflix_service.saved_objects
(
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    created_at timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_by character varying(256) COLLATE pg_catalog."default" NOT NULL,
    object_type character varying(215) COLLATE pg_catalog."default" NOT NULL,
    object_id character varying(512) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT saved_objects_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS netflix_service.saved_objects
    OWNER to postgres;

COMMENT ON TABLE netflix_service.saved_objects
    IS 'Provides history on object access and operation.';

COMMENT ON COLUMN netflix_service.saved_objects.object_type
    IS 'A fully qualified object type, provided by the saving system';

COMMENT ON COLUMN netflix_service.saved_objects.object_id
    IS 'A fully qualified object id, provided by the saving system';
-- Index: saved_objects_created_by_object

-- DROP INDEX IF EXISTS netflix_service.saved_objects_created_by_object;

CREATE UNIQUE INDEX IF NOT EXISTS saved_objects_created_by_object
    ON netflix_service.saved_objects USING btree
    (created_by COLLATE pg_catalog."default" ASC NULLS LAST, object_type COLLATE pg_catalog."default" ASC NULLS LAST, object_id COLLATE pg_catalog."default" ASC NULLS LAST)
    TABLESPACE pg_default;